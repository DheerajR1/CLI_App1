var readLineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readLineSync.question(chalk.bgMagentaBright("May i know your name please?")+" ");

console.log("Welcome!", chalk.underline.bold(userName) + ", Let's see how well you know me!!");

var highScore = [
  {
    name: "Dheeraj",
    score:5
  },
  {
    name: "John Doe",
    score:4
  },
  {
    name: "John Doe 1",
    score:2
  }
];
var score = 0;

var questionnaire = [
  {
    question : "what's my Gaming name? ",
    answer : "DextrousMonk"
  },
  {
    question : "what's my favourite anime? ",
    answer : "Naruto"
  },
  {
    question : "where am I working from currently? ",
    answer : "HOME"
  },
  {
    question : "what's my insta handle? ",
    answer : "ambidextrous_monk"
  },
  {
    question : "where do i live? ",
    answer : "bangalore"
  }
];

function play(question, answer, i) {
  var userAns = readLineSync.question(question);

  var correctOrNot = userAns.toLowerCase() === answer.toLowerCase();

  if (correctOrNot) {
    console.log(chalk.green("you are right"));
    score++;
  } else {
    console.log(chalk.green('No! It\'s not',
    chalk.red.underline.bold(userAns) + 
    '. It\'s ' + chalk.yellow.bgBlackBright.underline.bold(answer)));
  }
  console.log("Your current score is:", score);
}

for (var i = 0; i<questionnaire.length; i++) {
  var quiz = questionnaire[i];
   console.log("--------------",i+1,"----------------");
  play(quiz.question, quiz.answer, i);
}
  console.log("------------------------------");
console.log("\n\nYou scored:", score,"");
if (score < 2) {
  console.log( chalk.yellow.bgBlackBright.underline.bold("CALL me NOW!\n\n\n"));
}
console.log("Current Leaderboard");
console.log("Name \t\t Score");

var newTopper = false;

for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name, "\t\t", highScore[i].score);
  if (score > highScore[i].score) {
    newTopper = true;
  }
}
if (newTopper) {
  console.log(chalk.blue.bgGreenBright.bold("send your score, I'll add it to the Leaderboard"));
}




