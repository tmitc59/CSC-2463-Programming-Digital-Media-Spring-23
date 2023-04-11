function setup() {
    createCanvas(400, 450);
    // creates clear borders
    noStroke();
    colorMode(HSB, 255);
  }
  
  function draw() {
    background(255);

    //creates purple ellipse
    push();
    fill(100, 180, 320, 120);
    ellipse(270, 185, 150, 150);
    pop();

    //creates blue ellipse
    push();
    fill(180, 180, 320, 120);
    ellipse(150, 185, 150, 150);
    pop();

    //creates green ellipse
    push();
    fill(280, 180, 320, 120);
    ellipse(210, 110, 150, 150);
    pop(); 


    
  }
  