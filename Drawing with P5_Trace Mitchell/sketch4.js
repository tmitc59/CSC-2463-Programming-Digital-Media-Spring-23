function setup() {
  createCanvas(250, 250);
  colorMode(HSB);
  
}

function draw() {
  //creates navy blue background
  background(250, 150, 45);

  //creates green ellipse in the center of the canvas
  push();
  stroke(255);
  fill(120, 100, 50);
  ellipse(125, 125, 125, 125);
  pop();
//creates white line around ellipse
  push();
  stroke(255);
  strokeWeight(3);
  fill(0, 125, 125);

  //creates red star in green ellipse
  push();
  beginShape();
  //top  right
  vertex(183, 110);
  vertex(140, 110);
  //head
  vertex(125, 63);
  vertex(110, 110);
  //top left
  vertex(65, 110);
  vertex(105, 130);
  //bottom left
  vertex(85, 170);
  vertex(125, 145);
  // bottom right
  vertex(165, 170);
  vertex(145, 130);
  endShape(CLOSE);
  pop();

  /*vertex(175, 110);
  vertex(140, 110);
  vertex(125, 75);
  vertex(110, 110);
  vertex(75, 110);

  vertex(105, 130);
  vertex(95, 165);
  vertex(125, 145);
  vertex(155, 165);
  vertex(145, 130);
  */
}
