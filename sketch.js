// Project Title
// Your Name Policron && Willis
// Date

let shipX = 200;   // Variables
let shield = 3
let meteorX1 = 200;
let meteorY1 = -50;
let meteorR1 = 40
let meteorX2 = 200;
let meteorY2 = -50;
let meteorR2 = 100
let meteorX3 = 300;
let meteorY3 = -50;
let meteorR3 = 30
let meteorHit = false
let start = false
let win = false
let lose = false
let points = 0

function setup() {  // Runs Once Before Everything
  createCanvas(400, 400);
  background(0);
  ellipseMode(CENTER);
  rectMode(CENTER,CENTER);
  frameRate(60);
  textFont("bazooka")
  textAlign(CENTER,CENTER)
  stroke(0)
}

function draw() {
  background(0);
  fill(255)

  if (start == false) {   //Start Screen
    textSize(32)
    text ('Game Name Or Something', 200, 100)
    textSize(12)
    text ('Press "Q" to Begin', 200, 200)
    drawShip(100,350)
    drawMeteor(90, 250, 40)
    drawMeteor(150, 290, 40)
    drawMeteor(70, 300, 30)
    if (keyIsDown(81)) {
      start = !start
  }
  }
  
  if(win == false && lose == false && start == true) {     // Run in you haven't lost yet
  background(0);
  fill(255)

  if (points >= 1000) {
    drawMeteor(meteorX2, meteorY2, meteorR2)  // Draw a second bigger meteor after you reach 1000 points
  }
  drawMeteor(meteorX1, meteorY1, meteorR1);   // Draw the meteor(s)
  if (points >= 3000) {
    drawMeteor(meteorX3,meteorY3,meteorR3)    // Draw third Smaller meteor after you reach 3000 points
  }

  meteorY1 += 7   //Move the meteor(s)
  if (points >= 1000) { // Move bigger meteor when you hit 1000 points
      meteorY2 += 5
  }
  if (points >= 3000) { // Move smaller meteor when hit 3000 points
    meteorY3 += 9
  }

  if(meteorY1 > 450) {   // Meteor Hit & Respawn #1
    meteorY1 = -100;
    meteorX1 = random(20,380);
    points += 100
  }
  if(dist (meteorX1, meteorY1, shipX, 350) <= meteorR1 / 2 + 10)  {
    shield -= 1
    meteorY1 = -100;
    meteorX1 = random(20,380)
  }

  if(meteorY2 > 500) {   // Meteor Hit & Respawn #2
    meteorY2 = -200;
    meteorX2 = random(50,350);
    points += 100
  }
  if(dist (meteorX2, meteorY2, shipX, 350) <= meteorR2 / 2 + 10)  {
    shield -= 1
    meteorY2 = -200;
    meteorX2 = random(50,350)
  }

  if(meteorY3 > 450) {   // Meteor Hit & Respawn #3
    meteorY3 = -50;
    meteorX3 = random(50,350);
    points += 100
  }
  if(dist (meteorX3, meteorY3, shipX, 350) <= meteorR3 / 2 + 10)  {
    shield -= 1
    meteorY3 = -50;
    meteorX3 = random(50,350)
  }


  drawShip(shipX, 350);   // Draw the Ship

  if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {   // Ship movement
    shipX -= 5;
  }
  if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)) {
    shipX += 5;
  }

  if (shipX < 20) {   // Ship boundries
    shipX = 20;
  }
  if (shipX > 380) {
    shipX = 380;
  }

  textSize(12)
  text ("Shields", 30,20)
  text (shield, 60,20)    // Shield counter

  
  text ("Points",320,20)  
  text (points, 360,20)    // Point counter

  if (points >= 10000) {
    win = !win
  }

  if (shield < 0) {       // Lose game if you get hit without shields
  lose = !lose
  shield = 0
  }
}

if (win == true) {   // Win Screen
  fill(0)
  rect(0,0, width ,height,10)
  fill(255,255,0)
  textSize(32)
  text("YOU WIN",200,200)
  textSize(12)
  fill(255)
  text("this took way too long", 200, 250)
  text('Press "R" to Play Again',200,300)
}

if (lose == true) {   // Lose Screen
  fill(0)
  rect(0,0, width ,height,10)
  fill(255,0,0)
  textSize(32)
  text("GAME OVER",200,200)
  textSize(12)
  fill(255)
  text("Break All Your Shields and You'll Be Next", 200, 250)
  text('Press "R" to Restart',200,300)
}

if(keyIsDown(82)){   // Restart the game
  if (lose == true) {
  lose = !lose
  shield = 3 
  points = 0
  shipX = 200
  }
  if (win == true) {
    win = !win
    shield = 3
    points = 0
    shipX = 200
  }
}
}

// Define the functions

function drawShip(x, y) {
  fill(230);
  triangle(x - 20, y + 20, x + 20, y + 20, x, y - 20);
  fill(100, 100, 255)
  triangle(x, y-10,x-10,y+10,x+10,y+10)
}

function drawMeteor(x, y, r) {
  noStroke()
  fill('orange')
  triangle(x - r / 2, y, x + r / 2, y, x , y - 1.5 * r)
  circle(x, y, r * 1.1)
  fill(150, 0, 0);
  circle(x, y, r);
  fill(100, 0, 0)
  circle(x + r / 6, y, r / 3)
  fill(60, 0, 0)
  circle(x - r / 5, y - r / 6, r / 5)
  fill(120, 0, 0)
  circle(x - r / 6, y + r / 4, r / 4)
}

function drawShield(x,y) {
  stroke(255)
  fill("yellow")
  triangle(x - 10, y, x + 10, y, x, y + 20)
}

points = 9000
