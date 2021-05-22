var readLineSync = require("readline-sync");

var userName = readLineSync.question("May i know your name please? ");
console.log("Welcome!", userName,"Let's see how well you know me!!");

var score = 0;

var questionnaire = [
  {
    question : "what's my Gaming name? ",
    answer : "DextrousMonk"
  },
  {
    question : "where do i live? ",
    answer : "bangalore"
  }
];

function play(question, answer) {
  var userAns = readLineSync.question(question);

  if (userAns.toLowerCase() === answer) {
    console.log("you are right");
    score++;
  }
  console.log("Your current score is:", score);
  console.log("------------------------------");
}

for (var i = 0; i<questionnaire.length; i++) {
  var quiz = questionnaire[i];
  play(quiz.question, quiz.answer);
}
console.log("You scored:", score);
