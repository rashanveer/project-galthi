var car , wall;
var speed,weight;


function setup() {
  createCanvas(1500,800);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1500,100,60,height/2);

}

function draw() {
  background(0); 
  
  



  drawSprites();
}