let colorPalette = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
  "brown",
  "white",
  "black",
];

let currentColor = colorPalette[0];

//creates canvas and color boxes
function setup() {
  createCanvas(2500, 1500);
  //colorMode(HSB);
  //creates pallete on left side
  for (let i = 0; i < colorPalette.length; i++) {
    push();
    fill(colorPalette[i]);
    noStroke();
    rect(0, i * 40 + i, 40, 40);
    pop();
  }

}

//Checks the position of the mouse to make sure it is not painting over boxes
function draw() {
  if(mouseIsPressed){
    if (mouseX > 45 && mouseY > colorPalette.length * 1) {
      stroke(currentColor);
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  } 

}

function mousePressed() {
  let x = 0;
  let y = 0;
  let l = 40;
  let k = 40;

  for (let i = 0; i < colorPalette.length; i++) {
    if (
      mouseX >= x &&
      mouseX < x + l &&
      mouseY >= y + i * (k + 1) &&
      mouseY < y + i * (k + 1) + k
    ) {
      currentColor = colorPalette[i];
      break;
    }
  }
}
