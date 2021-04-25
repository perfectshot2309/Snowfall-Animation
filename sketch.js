var bg
var maxSnow=100;

function preload(){
  bg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1300,600);  
}

function draw() {
  background(bg);  
  for(var i=0; i<maxSnow; i++){
    snow.push(new Snow(random(0,1350), random(0,50)));
  }
    snow.display();
    snow.changePosition();
  drawSprites();

}