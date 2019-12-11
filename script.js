//Instead of below method, create a function that creates a div and then erases a div (button) for game start. 

// Use this below to make initial start mode and gameplay mode
// in css put .start .game or whatever to define the modes

//use assignment 18 to make each answer a clickable event. and if the clicked equals the answer key in the object, voila. if answer === choices[id]
// add if statement so when reaches end it finishes game
// listEl.addEventListener("click", function(event) {
//         event.preventDefault();
//         if(event.target.matches("button")) {
//           const item = document.createElement("div");
//           item.textContent = groceries[event.target.parentElement.id];
//           shoppingCartEl.append(item);
//         }
//       });

$(document).ready(function () {

var i = 0;

function showQuestion() {
        console.log("Questions length is " + questions.length)
        if (i = questions.length) {
                endOfGame();
        } else {
        $("#quiz").append("<h2>" + questions[i].title + "</h2>");
        $("#quiz").append('<div id="a">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[0] + '</button>' + '</div>');
        $("#quiz").append('<div id="b">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[1] + '</button>' + '</div>');
        $("#quiz").append('<div id="c">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[2] + '</button>' + '</div>');
        $("#quiz").append('<div id="d">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[3] + '</button>' + '</div>');
        i = i + 1;
        console.log(i);
}}

function endOfGame() {
        console.log("The end");
}

        // function runQuiz() {
        //         //This loop creates the questions in the quiz 
        //         for(i=0;i<questions.length;i++) {
        //                 $("#quiz").append("<h2>" + questions[i].title + "</h2>");
        //         $("#quiz").append('<div id="a">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[0] + '</button>' + '</div>');
        //         $("#quiz").append('<div id="b">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[1] + '</button>' + '</div>');
        //         $("#quiz").append('<div id="c">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[2] + '</button>' + '</div>');
        //         $("#quiz").append('<div id="d">' + '<button type="button" class="btn btn-primary">' + questions[i].choices[3] + '</button>' + '</div>');
                
        //         if ($("#a").click() && questions[i].answer === questions[i].choices[0]) {
        //                 console.log("A is correct!");
        //         } else if ($("#b").click() && questions[i].answer === questions[i].choices[1]) {
        //                 console.log("B is correct!");
        //         } else if ($("#c").click() && questions[i].answer === questions[i].choices[2]) {
        //                 console.log("C is correct!");
        //         } else if ($("#d").click() && questions[i].answer === questions[i].choices[3]) {
        //                 console.log("D is correct!");
        //         }

               
        //         }
        // };

        $("#clickToStart").on('click', function () {
                console.log("hiya");
                $("#clickToStart").hide("slow");
                showQuestion();
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