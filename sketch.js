// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let shipX = 200;
let meteorX = 200;
let meteorY = -50;
let meteorR = 40
let shield = 3
let lose = false
let start = false

function setup() {
  createCanvas(400, 400);
  background(0);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER,CENTER);

  //Set the number of frames per second
  frameRate(60);
}

function draw() {
  //This loop gets run over and over again
  //Your code here:
  background(0);
  fill(255)
  if(lose == false) {
  background(0);
  fill(255)
  text (shield, 100,390)
  drawShip(shipX, 375);
  drawMeteor(meteorX, meteorY, meteorR);
  meteorY += 5;
  if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {
    shipX -= 5;
  }
  if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)) {
    shipX += 5;
  }
  if (shipX < 20) {
    shipX = 20;
  }
  if (shipX > 380) {
    shipX = 380;
  }
  if(meteorY > 450) {
    meteorY = -50;
    meteorX = random(50, 350);
  }
  if(dist (meteorX, meteorY, shipX, 375) <= 30)  {
    shield -= 1
    meteorY = -50;
    meteorX = random(400)
  }
}
if (shield < 0) {
  lose = !lose
  shield = 0
}
if (lose == true) {
  fill(0)
  rect(0,0, width ,height,10)
  fill(255,0,0)
  textAlign(CENTER,CENTER)
  text("YOU LOSE",200,200)
  text('press space to restart',200,300)
}
if(keyIsDown(32)&&lose == true){
  lose = !lose
  shield = 3 
}
}

function drawShip(x, y,) {
  //Draw the ship at the given x and y coordinates
  fill(255);
  triangle(x - 20, y + 20, x + 20, y + 20, x, y - 20);
}

function drawMeteor(x, y, r) {
  fill(150, 0, 0);
  circle(x, y, r);
}