//Instead of below method, create a function that creates a div and then erases a div (button) for game start. 

// Use this below to make initial start mode and gameplay mode
// in css put .start .game or whatever to define the modes

//use assignment 18 to make each answer a clickable event. and if the clicked equals the answer key in the object, voila. if answer === choices[id]
// add if statement so when reaches end it finishes game

$(document).ready(function () {

        function runQuiz() {
                console.log("second hiya");
                for(i=0;i<questions.length;i++) {
                        $("#quiz").append("<h2>" + questions[i] + "</h2>");
                        console.log(questions);
                }
        }

        const startGameButton = $("#clickToStart").on('click', function () {
                console.log("hiya");
                $("#startGameSection").hide("slow");
                runQuiz();
        });




});
//have question.title show in question class.
// On google docs I have how to commit to localStorage.setItem("count", count);

{/* This is the structure of each quiz question:  <form>
            <h1>Quiz Questions</h1>
            <p class="question"></p>
            <ul id="quizChoices">
                <li id="0"></li>
                <li id="1"></li>
                <li id="2"></li>
                <li id="3"></li>
            </ul>
        </form> */}