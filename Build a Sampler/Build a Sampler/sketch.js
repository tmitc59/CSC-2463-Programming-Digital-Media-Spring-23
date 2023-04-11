
let files = [];
let fileNames = ["north-egypt.mp3", "phone-vibrate.wav", "robot-what-is-happening-to-me.wav", "whale-from-wales.wav"];
let reverb;

function preload() 
{
  
  files.push(loadSound("media/north-egypt.mp3"));
  files.push(loadSound("media/phone-vibrate.wav"));
  files.push(loadSound("media/robot-what-is-happening-to-me.wav"));
  files.push(loadSound("media/whale-from-wales.wav"));

  reverb = new p5.Reverb();
  reverb.set(3, 2);
}

function setup() 
{
  createCanvas(width, height);

  for (let i = 0; i < files.length; i++) {
    let button = createButton('Sample: ' + fileNames[i]);
    button.mousePressed(() => 
    {
      for (let j = 0; j < files.length; j++) {
        if (i !== j) {
          files[j].stop();
        }
      }

      files[i].disconnect();
      files[i].connect(reverb);
      reverb.process(files[i], 5, 1);
      files[i].play();
    });
    button.parent("buttons");
  }
}