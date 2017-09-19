//We are making a designer clock

function setup(){
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw(){
  background(51);
  translate(300, 300);
  rotate(-90);

  //Variables to store time
  let milli = millis();
  let seconds = second();
  let minutes = minute()
  let hours = hour();

  //Making an arc
  strokeWeight(8);
  noFill();

  //For seconds
  stroke(255, 100, 150);
  end1 = map(seconds, 0, 59, 0, 360);
  arc(0, 0, 300, 300, 0, end1);

  //For minutes
  stroke(150, 100, 255);
  end2 = map(minutes, 0, 59, 0, 360);
  arc(0, 0, 280, 280, 0, end2);

  //For hours
  stroke(150, 255, 100);
  end3 = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);

  //Just for debugging
  //  fill(0, 155, 255);
  //  noStroke();
  //  textSize(22);
  //  text(hours + ":" + minutes + ":" + seconds, 270, 300);
}

//Inspired by Daniel Shiffmann's Coding challenge
