const startGameButton = document.getElementById("clickToStart");

//Instead of below method, create a function that creates a div and then erases a div (button) for game start. 

// Use this below to make initial start mode and gameplay mode
// in css put .start .game or whatever to define the modes

//use assignment 18 to make each answer a clickable event. and if the clicked equals the answer key in the object, voila. if answer === choices[id]
// add if statement so when reaches end it finishes game

//to hide put input mode on button or whatever that puts opacity to 0, width 0, height 0
// add second and third quiz for "next steps of the interview"
// const themeSwitcher = document.querySelector("#theme-switcher");
// const container = document.querySelector(".container");
// let mode = "dark";

startGameButton.addEventListener("click", function() {
        var startGameSection = document.getElementById("startGameSection");
        startGameSection.setAttribute("class", "disappear");
});

// themeSwitcher.addEventListener("click", function() {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

//have question.title show in question class.
// On google docs I have how to commit to localStorage.setItem("count", count);