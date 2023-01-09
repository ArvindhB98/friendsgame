
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Enter Your Name : ");

console.log("Welcome " + userName);


// data of high score
var highScores = [
  {
    name: "Vignesh",
    score: 5,
  },

  {
    name: "Mythu",
    score: 5,
  },
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;

  } else {
    console.log("Oops!");

  }

  console.log("Current score: ", score);
}

var questions = [{
  question: "What is Chandler bing's job? ",
  answer: "statistical analysis and data reconfiguration"
}, {
  question: "Who sets up Phoebe and Mike? ",
  answer: "joey"
},
{
  question: "Who is joey's bed time pal? ",
  answer: "hugsy"
},
{
  question: "Rachel was popular in high school. Her prom date Chip ditched her for which girl at school? ",
  answer: "amy welsh"
},
{
  question: "What is the name of the 1950s-themed diner where Monica worked as a waitress?",
  answer: "moondance diner"
},
{
  question: "What is the name of the fellow paleontologist Ross dates in season 10?" ,
  answer: "charlie"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

  if (i < ((questions.length) - 1)) {
    console.log("Nex Question");
  }

}

console.log("Your score: ", score);