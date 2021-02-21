var canva;
var bgImg;
var database;
var gameState = 0;
var contestantCount;
var contestant,quiz,question;
var allContestants;

function preload(){
bgImg=loadImage("hbl.jpg")
}
function setup(){
  canvas = createCanvas(850,400);

  database=firebase.database();
  console.log(database);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bgImg);
  if(contestantCount===4)
  {
    quiz.update(1);
  }

  if(gameState===1)
  {
    quiz.play();
  }
  
}
