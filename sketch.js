let randomNumbers;
let moonColor;
let moonImage;
let p;

function setup() {
  createCanvas(400, 400);
  moonColor = color(255, 0, 255);
  randomNumbers = printManyRandoms(100, 10);
  moonImage = loadImage('assets/fullMoon.png')

}

function draw() {
  background(0);
  p = map(mouseX, 0, width, 0, 30);
  drawMoon(width/2, height/2, 50, p, moonColor);
  
}

function drawMoon(x, y, size, phase){
 fill(0);
 //phase is 0 - 30
 imageMode(CENTER);
 image(moonImage, x, y, size, size);
 if(phase < 15){
  phase = map(phase, 0, 15, -60, 0);
 }
 if (phase != 15){
  ellipse(x+phase, y, size, size);
 }

 
}

function printManyRandoms(numberOfRandoms, max){
  let myArray = [];
  for (let i = 0; i < numberOfRandoms; i++) {
    myArray[i] = random(max);
  }
  return myArray;
  
}