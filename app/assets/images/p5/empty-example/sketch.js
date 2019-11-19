function setup() {
  createCanvas(640,480);
  background(255,204,0);
}

function draw() {
  if (mouseIsPressed){
  	fill(0);
  } 
  else{
  	fill(255);
  }
  triangle(mouseX, mouseY, 0,80, 20,20)
}