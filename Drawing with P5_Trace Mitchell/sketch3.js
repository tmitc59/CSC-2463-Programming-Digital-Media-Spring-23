function setup() {
    createCanvas(400, 250);
    noStroke();
    colorMode(HSB);
  }
  
  function draw() {
    //black background
    background(0);
    
    //creates yellow ellipse
    push();
    fill(60, 100, 100);
    ellipse(100, 100, 150, 150);
    pop();
    //creates mouth for yellow ellipse
    push();
    fill(0);
    triangle(100, 100, 20, 20, 20, 180);
    pop();

    //creates red arc with rectangle underneath
    push();
    fill(0, 100, 100);
    arc(275, 95, 150, 150, PI, TWO_PI);
    rect(200, 95, 150, 70);
    pop();
    //creates two white ellipses as eyes
    ellipse(240, 90, 50, 50);
    ellipse(310, 90, 50, 50);
    //creates blue ellipses as pupils
    push();
    fill(240, 100, 100);
    ellipse(240, 90, 30, 30);
    ellipse(310, 90, 30, 30);
    pop();

  }