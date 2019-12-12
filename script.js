// This counter is to advance through the quiz questions properly
var counter = 0;
// These values help the clicked answer buttons score properly
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
let finalScore = 0;
let secondsLeft = 100;

$(document).ready(function () {

        //Click the start button to show the first question of the quiz
        $("#quiz").hide();
        $("inputInitials").hide();
        $("#clickToStart").on('click', function () {
                $("#clickToStart").hide("slow");
                $("#quiz").show("slow");
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

//End game Initials input
function endGame() {
        $("#quiz").hide();
        $('#scoreSection').append("<div class='col-sm-2'>" + "</div>");
        $('#scoreSection').append("<p class='results col-sm-10'>" + "Your score is " + finalScore + "!" + "</p>");
        $('#scoreSection').append("<div class='row'>" + "</div>");
        $('#scoreSection').append("<input type='text' id='initialsHere' class='results col-sm-7' placeholder='Put your initials here'>" + "</input>");
        $('#scoreSection').append("<button type='button' id='submitResults' class='btn btn-success col-sm-3'>" + "Submit" + "</button>");
        var initials = document.getElementById('#initialsHere').value;
        $("#submitResults").on('click', function () {
                localStorage.setItem(initials , finalScore);
                $('#initialsHere').remove();
                showHighScores();
        });
}

//show High Scores
function showHighScores() {
        if (localStorage.length === 0) {
                $('#localStorageScores').append("<div>" + "There are no high scores yet!" + "</div>");
        } else {
                $('#localStorageScores').append("<div>" + localStorage + "</div>");
        }      
  }


// Handles the click of an answer choice
function checkQuestion(number) {
        if (counter === 9) {
                endGame();
        } else if (String(questions[counter].answer) === String(questions[counter].choices[number])) {
                console.log("answer correct!");
                counter++;
                showQuestion(counter);
        } else {
                console.log("answer incorrect!");
                counter++;
                showQuestion(counter);
        }
};