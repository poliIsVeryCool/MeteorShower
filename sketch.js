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
let start = false
let lose = false
let points = 0

function setup() {
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
  
  if(lose == false && start == true) {     // Run in you haven't lost yet
  background(0);
  fill(255)

  drawMeteor(meteorX1, meteorY1, meteorR1);   // Draw the meteor(s)
  if (points >= 1000) {
    drawMeteor(meteorX2, meteorY2, meteorR2)  // Draw a second bigger meteor after you reach 1000 points
  }

  meteorY1 += 5;   //Move the meteor(s)
  if (points >= 1000) { // Move bigger meteor when you hit 1000 points
      meteorY2 += 3
  }

  if(meteorY1 > 450) {   // Meteor Hit & Respawn #1
    meteorY1 = -50;
    meteorX1 = random(20,380);
    points += 100
  }
  if(dist (meteorX1, meteorY1, shipX, 375) <= meteorR1 / 2 + 10)  {
    shield -= 1
    meteorY1 = -50;
    meteorX1 = random(20,380)
  }

  if(meteorY2 > 450) {   // Meteor Hit & Respawn #2
    meteorY2 = -50;
    meteorX2 = random(50,350);
    points += 100
  }
  if(dist (meteorX2, meteorY2, shipX, 375) <= meteorR2 / 2 + 10)  {
    shield -= 1
    meteorY2 = -50;
    meteorX2 = random(50,350)
  }

  drawShip(shipX, 375);   // Draw the Ship

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
  if (shield < 0) {       // Lose game if you get hit without shields
  lose = !lose
  shield = 0
  }

  text ("Points",320,20)  
  text (points, 360,20)    // Point counter

}

if (lose == true) {   // Lose Screen
  fill(0)
  rect(0,0, width ,height,10)
  fill(255,0,0)
  textAlign(CENTER,CENTER)
  textSize(32)
  text("GAME OVER",200,200)
  textSize(12)
  fill(255)
  text("Break All Your Shields and You'll Be Next", 200, 250)
  text('Press "R" to Restart',200,300)
}

if(keyIsDown(82)&&lose == true){   // Restart the game
  lose = !lose
  shield = 3 
  points = 0
  shipX = 200
}
}

// Define the functions

function drawShip(x, y) {
  fill(230);
  triangle(x - 20, y + 20, x + 20, y + 20, x, y - 20);
  fill("lightblue")
  triangle(x, y-10,x-10,y+10,x+10,y+10)
}

function drawMeteor(x, y, r) {
  fill(150, 0, 0);
  circle(x, y, r);
}

function drawShield(x,y) {
  stroke(255)
  fill("yellow")
  triangle(x - 10, y, x + 10, y, x, y + 20)
}
