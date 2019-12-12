// This counter is to advance through the quiz questions properly
var counter = 0;
// These values help the clicked answer buttons score properly
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
let finalScore = 0;
let secondsLeft = 100;

//This first document ready function is to let the page load and show the button and not the quiz
$(document).ready(function () {

        //Click the start button to show the first question of the quiz and hide high scores
        $("#quiz").hide();
        $("inputInitials").hide();
        $("#clickToStart").on('click', function () {
                $("#clickToStart").hide("slow");
                $("#quiz").show("slow");
                $("#localStorageScores").text(" ");
                setTime();
                showQuestion(counter);
        });
});

//Timer
function setTime() {
        const timerInterval = setInterval(function () {
                secondsLeft--;
                $("#timerHolder").text("Time left: " + secondsLeft);
                if (secondsLeft === 0) {
                        clearInterval(timerInterval);
                        endGame();
                }
        }, 1000);
}

// Displays the question[at index counter] of the quiz
function showQuestion(counter) {
        $(".question").text(questions[counter].title);
        $("#0").text(questions[counter].choices[0]);
        $("#1").text(questions[counter].choices[1]);
        $("#2").text(questions[counter].choices[2]);
        $("#3").text(questions[counter].choices[3]);
};

//Creates the high score input interface
function endGame() {
        $("#quiz").hide();
        $('#scoreSection').append("<div class='col-sm-2'>" + "</div>");
        $('#scoreSection').append("<p class='results col-sm-10'>" + "Your score is " + finalScore + "!" + "</p>");
        $('#scoreSection').append("<div class='row'>" + "</div>");
        $('#scoreSection').append("<input type='text' id='initialsHere' class='results col-sm-7' placeholder='Put your initials here'>" + "</input>");
        $('#scoreSection').append("<button type='button/submit' onclick='btnSendInitials()' id='submitResults' class='btn btn-success col-sm-3'>" + "Submit" + "</button>");
};

//This is the submit button for adding your high score
function btnSendInitials() {
        var initials = document.getElementById("initialsHere").value;
        localStorage.setItem(initials, finalScore);
        $('#scoreSection').hide();
        showHighScores();
}

//show High Scores
function showHighScores() {
        $("#clickToStart").show("slow");
        $("#quiz").hide("slow");
        $("#timerHolder").hide("slow");
        $('#localStorageScores').children().remove();
        if (localStorage.length === 0) {
                $('#localStorageScores').text("There are no high scores yet!");
        } else {
                for (var key in localStorage) {
                        if (key === "length" || key === "key" || key === "getItem" || key === "setItem" || key === "removeItem" || key === "clear") {
                        } else {
                                let score = localStorage.getItem(key);
                                if (score > 100) {
                                        $('#localStorageScores').append("<div>" + "<b>" + key + " scored " + score + "</b>" + "</div>");
                                } else { $('#localStorageScores').append("<div>" + key + " scored " + score + "</div>"); }
                        }
                }
        }
}


// Handles the click of an answer choice
function checkQuestion(number) {
        if (counter === 9) {
                finalScore = secondsLeft;
                $("#timerHolder").text(" ");
                endGame();
        } else if (String(questions[counter].answer) === String(questions[counter].choices[number])) {
                console.log("answer correct!");
                secondsLeft = secondsLeft + 10;
                counter++;
                showQuestion(counter);
        } else {
                console.log("answer incorrect!");
                secondsLeft = secondsLeft - 10;
                counter++;
                showQuestion(counter);
        }
};