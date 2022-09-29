var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Rucha",
    score: 3,
  },

  {
    name: "Ajay",
    score: 2,
  },
]

var questions = [{
  question: "Where do i live? ",
  answer: "Aurangabad"
}, {
  question: " Which is my favorite superhero? ",
  answer: "Thor"
},
{
  question: "Which is my fav actor? ",
  answer: "DQ"
},
{
  question: "Which is my fav dish? ",
  answer: "Dosa"
},
{
  question: "Which is my fav sport? ",
  answer: "Tennis"
},

];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW RUCHA?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);


  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
