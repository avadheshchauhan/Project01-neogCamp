let readlineSync = require("readline-sync");

let score = 0;

let userName = readlineSync.question("May I know your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Avadhesh");

console.log("------------");


let questions = [{
      question: "Where do he live? ",
      answer: "Mumbai"
      },{
      question: "When did he graduate?\na)2017\nb)2018\nc)2019\n",
      answer: "b"
      },{
      question: "Where do he works? ",
      answer: "Hudl"
      },{
      question: "How many siblings does he have?\na)2\nb)3\nc)4\n ",
      answer: "c"
      },{
      question: "When is his birthday?\na)June 4\nb)October 18\nc)May 19\n",
      answer: "b"
      },{
      question: "Favorite superhero of his is? ",
      answer: "IronMan"
      }];

function play(question, answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase === answer.toLowerCase){
    console.log("You are right!");
    score++;
  }
  else{
    console.log("You are wrong!");
  }
  console.log("Current score is " + score);
  console.log("------------");
}

for(let i = 0; i < questions.length; i++){
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! Your final score is " + score);