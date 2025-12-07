let angle = 0;
let dice;
let block;
let mouth;
let chip;
let dale;

function setup() {
  createCanvas(450, 800);
  noStroke();

  angleMode(DEGREES);
  dice = Math.floor(random(0, 4));
  block = Math.floor(random(0, 4));
  mouth = Math.floor(random(0, 5));
  chip = Math.floor(random(0, 3));
  dale = Math.floor(random(0, 3));
}

function draw() {
  background(150);

  //FORGOT TO USE THE GOOD RATIO
  translate(30, 125);

  //BIG GEAR LEFT
  push();
  fill(100);
  rectMode(CENTER);
  translate(0, -100);
  rotate(-angle);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  circle(0, 0, 200);
  pop();

  //SMALL GEAR UP LEFT
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(200, -100);
  rotate(angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  //BIG GEAR MIDDLE
  push();
  fill(100);
  rectMode(CENTER);
  translate(50, 250);
  rotate(-angle);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  circle(0, 0, 100);
  pop();

  //SMALL GEAR MIDDLE
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(110, 370);
  rotate(-angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  //SMALLEST GEAR MIDDLE
  push();
  fill(100);
  rectMode(CENTER);
  translate(150, 310);
  rotate(2 * angle);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  circle(0, 0, 50);
  pop();

  //MINI GEAR MIDDLE
  push();
  fill(100);
  rectMode(CENTER);
  translate(20, 345);
  rotate(2 * angle);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  circle(0, 0, 30);
  pop();

  //BIG GEAR UP RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(380, 50);
  rotate(-angle);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  circle(0, 0, 100);
  pop();

  //SMALL GEAR UP RIGHT
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(330, 140);
  rotate(-angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  //SMALLEST GEAR UP RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(410, 170);
  rotate(2 * angle);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  circle(0, 0, 50);
  pop();

  //SMALLEST GEAR MIDDLE RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(300, 330);
  rotate(-angle);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  circle(0, 0, 50);
  pop();

  //MINI GEAR MIDDLE RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(345, 370);
  rotate(2 * angle);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  circle(0, 0, 30);
  pop();

  //BIG GEAR DOWN RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(400, 450);
  rotate(-angle);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  rotate(45);
  rect(0, 0, 150, 30, 10);
  circle(0, 0, 100);
  pop();

  //SMALL GEAR DOWN RIGHT
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(440, 280);
  rotate(angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  //BIG GEAR LEFT DOWN
  push();
  fill(100);
  rectMode(CENTER);
  translate(40, 580);
  rotate(angle);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  rotate(45);
  rect(0, 0, 300, 50, 10);
  circle(0, 0, 200);
  pop();

  //SMALL GEAR DOWN MIDDLE
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(280, 650);
  rotate(angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  //MINI GEAR MIDDLE DOWN
  push();
  fill(100);
  rectMode(CENTER);
  translate(270, 500);
  rotate(2 * angle);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  circle(0, 0, 30);
  pop();

  //MINI GEAR MIDDLE DOWN DOWN
  push();
  fill(100);
  rectMode(CENTER);
  translate(285, 540);
  rotate(-2 * angle);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  circle(0, 0, 30);
  pop();

  //MINI GEAR MIDDLE DOWN DOWN
  push();
  fill(100);
  rectMode(CENTER);
  translate(310, 510);
  rotate(2 * angle);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  rotate(45);
  rect(0, 0, 40, 7, 7);
  circle(0, 0, 30);
  pop();

  //MINI MINI GEAR MIDDLE DOWN DOWN
  push();
  fill(100);
  rectMode(CENTER);
  translate(260, 527);
  rotate(2 * angle);
  rect(0, 0, 15, 3, 2);
  rotate(45);
  rect(0, 0, 15, 3, 2);
  rotate(45);
  rect(0, 0, 15, 3, 2);
  rotate(45);
  rect(0, 0, 15, 3, 2);
  circle(0, 0, 10);
  pop();

  //SMALLEST GEAR DOWN RIGHT
  push();
  fill(100);
  rectMode(CENTER);
  translate(390, 600);
  rotate(2 * angle);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  rotate(45);
  rect(0, 0, 80, 15, 5);
  circle(0, 0, 50);
  pop();

  //SMALL GEAR DOWN DOWN RIGHT
  push();
  fill(100);
  rotate(4);
  rectMode(CENTER);
  translate(385, 650);
  rotate(-angle);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  rotate(45);
  rect(0, 0, 100, 20, 7);
  circle(0, 0, 65);
  pop();

  angle += 1;

  /////////////////////////////////

  //LINE UNDER
  fill(53, 82, 146);
  rect(19, 150, 360, 90, 70);

  //FACE
  fill(111, 204, 184);
  rect(99, 45, 200, 210, 10);
  rect(99, 90, 200, 210, 50);

  /////////////////////////////////

  //EYE LEFT LEFT
  push();
  rectMode(CENTER);
  fill(255, 0, 255);
  circle(60, 195, 50);
  fill(255);
  circle(60, 195, 40);
  fill(0);
  circle(60, 195, 10);
  pop();

  switch (dale) {
    case 0:
      //EYELID RIGHT RIGHT MAD
      fill(255, 0, 255);
      arc(60, 195, 50, 50, -160, 20);
      break;
    case 1:
      //EYELID RIGHT RIGHT SLEEPY
      fill(255, 0, 255);
      arc(60, 195, 50, 50, 160, -20);
      break;
    case 2:
      //EYELID RIGHT RIGHT OPEN
      noFill();
      circle(60, 165, 70);
      //EYELASHES LEFT LEFT
      push();
      translate(60, 195);
      rectMode(CENTER);
      fill(0);
      rect(0, -33, 4, 10);
      rotate(20);
      rect(0, -33, 4, 10);
      rotate(-40);
      rect(0, -33, 4, 10);
      rotate(-20);
      rect(0, -33, 4, 10);
      pop();
      break;
  }

  //////////////////////////////////////////////////
  //EYE RIGHT RIGHT
  push();
  rectMode(CENTER);
  fill(255, 0, 255);
  circle(340, 195, 50);
  fill(255);
  circle(340, 195, 40);
  fill(0);
  circle(340, 195, 10);
  pop();

  switch (chip) {
    case 0:
      //EYELID RIGHT RIGHT SLEEPY
      fill(255, 0, 255);
      arc(340, 195, 50, 50, -160, 20);
      break;
    case 1:
      //EYELID RIGHT RIGHT MAD
      fill(255, 0, 255);
      arc(340, 195, 50, 50, 160, -20);
      break;
    case 2:
      //EYELID RIGHT RIGHT OPEN
      noFill();
      circle(260, 165, 70);
      //EYELASHES RIGHT RIGHT
      push();
      translate(340, 195);
      rectMode(CENTER);
      fill(0);
      rect(0, -33, 4, 10);
      rotate(20);
      rect(0, -33, 4, 10);
      rotate(20);
      rect(0, -33, 4, 10);
      rotate(-60);
      rect(0, -33, 4, 10);
      pop();
      break;
  }

  ///////////////////////////////////////

  //LONG NOSE
  push();
  translate(200, 230);
  rectMode(CENTER);
  fill(56, 87, 139);
  rect(0, -10, 70, 280, 22);
  fill(102, 127, 192);
  rect(0, -10, 40, 280, 20);
  pop();

  ////////////////////////////////////
  //EYE LEFT
  push();
  rectMode(CENTER);
  fill(255, 0, 255);
  circle(140, 165, 70);
  fill(255);
  circle(140, 165, 60);
  fill(0);
  circle(140, 165, 10);

  switch (block) {
    case 0:
      //EYELID LEFT SLEEPY
      fill(255, 0, 255);
      arc(140, 165, 60, 60, -160, 20);
      break;
    case 1:
      //EYELID LEFT MAD
      fill(255, 0, 255);
      arc(140, 165, 60, 60, 160, -20);
      break;
    case 2:
      //EYELID LEFT OPEN
      noFill();
      circle(260, 165, 70);
      break;
    case 3:
      //EYELID LEFT CLOSED
      fill(255, 0, 255);
      circle(140, 165, 70);
      break;
  }

  pop();

  //EYE RIGHT
  push();
  rectMode(CENTER);
  fill(255, 0, 255);
  circle(260, 165, 70);
  fill(255);
  circle(260, 165, 60);
  fill(0);
  circle(260, 165, 10);
  fill(0);
  circle(260, 165, 10);

  switch (dice) {
    case 0:
      //EYELID RIGHT SLEEPY
      fill(255, 0, 255);
      arc(260, 165, 60, 60, -160, 20);
      break;
    case 1:
      //EYELID RIGHT MAD
      fill(255, 0, 255);
      arc(260, 165, 60, 60, 160, -20);
      break;
    case 2:
      //EYELID RIGHT CLOSED
      fill(255, 0, 255);
      circle(260, 165, 70);
      break;
    //EYELID RIGHT OPEN
    case 3:
      noFill();
      circle(260, 165, 70);
      break;
  }

  pop();

  //////////////////////////////////////

  switch (mouth) {
    case 0:
      //MOUTH OPEN
      push();
      rectMode(CENTER);
      fill(252, 173, 208);
      rect(200, 340, 130, 80, 40);
      fill(0);
      rect(200, 340, 100, 60, 25);
      //TONGUE
      fill(255, 0, 255);
      arc(200, 370, 40, 65, 180, 0);
      //TEETH
      fill(255);
      rect(200, 315, 50, 10, 2);
      pop();
      break;

    case 1:
      //MOUTH SMILING
      push();
      rectMode(CENTER);
      //CENTER PINK
      fill(252, 173, 208);
      rect(200, 340, 130, 80, 40);
      translate(200, 340);
      fill(252, 173, 208);
      rotate(40);
      rect(-35, 20, 100, 80, 40);
      fill(0);
      rect(-35, 20, 80, 70, 40);
      pop();
      push();
      translate(200, 340);
      rectMode(CENTER);
      fill(252, 173, 208);
      rotate(-40);
      rect(35, 20, 100, 80, 40);
      fill(0);
      rect(35, 20, 80, 70, 40);
      pop();
      push();
      fill(0);
      rectMode(CENTER);
      rect(200, 340, 130, 65, 40);
      //TONGUE
      fill(255, 0, 255);
      arc(200, 372.5, 70, 65, 180, 0);
      //TEETH
      fill(255);
      rect(200, 312.5, 30, 10, 1);
      pop();
      break;

    case 2:
      //MOUTH FROWNING
      push();
      rectMode(CENTER);
      //CENTER PINK
      fill(252, 173, 208);
      rect(200, 340, 130, 80, 40);
      //LEFT PINK AND BLACK
      translate(200, 340);
      fill(252, 173, 208);
      rotate(-40);
      rect(-45, -30, 100, 60, 40);
      fill(0);
      rect(-45, -30, 80, 50, 40);
      pop();
      //RIGHT PINK AND BLACK
      push();
      translate(200, 340);
      rectMode(CENTER);
      fill(252, 173, 208);
      rotate(40);
      rect(45, -30, 100, 60, 40);
      fill(0);
      rect(45, -30, 80, 50, 40);
      pop();
      //CENTER BLACK
      push();
      fill(0);
      rectMode(CENTER);
      rect(200, 340, 130, 65, 40);
      //TONGUE
      fill(255, 0, 255);
      arc(200, 372.5, 90, 40, 180, 0);
      //TEETH
      fill(255);
      rect(200, 312.5, 30, 10, 1);
      pop();
      break;

    case 3:
      //MOUTH IN SHOCK
      push();
      rectMode(CENTER);
      fill(252, 173, 208);
      rect(200, 340, 80, 130, 40);
      fill(0);
      rect(200, 340, 70, 100, 40);
      //TEETH
      fill(255);
      rect(200, 305, 50, 13.5, 2);
      arc(200, 305, 50, 40, 180, 0);
      //TONGUE
      fill(255, 0, 255);
      circle(200, 370, 40);
      ellipse(200, 370, 60, 40);
      pop();
      break;

    case 4:
      //MOUTH CLOSED
      push();
      rectMode(CENTER);
      fill(252, 173, 208);
      rect(200, 330, 130, 60, 30);
      fill(255, 0, 255);
      rect(200, 330, 130, 2, 3);
      pop();
      break;
  }
}

function mousePressed() {
  // Regenerate random values for a new mask
  dice = Math.floor(random(0, 4));
  block = Math.floor(random(0, 4));
  mouth = Math.floor(random(0, 5));
  chip = Math.floor(random(0, 3));
  dale = Math.floor(random(0, 3));
}
