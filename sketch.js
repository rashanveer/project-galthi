var zenia ,tourus,cyclap, wall;
var speed,weight;


function setup() {
  createCanvas(1500,800);

  speed = random(55,90);
  weight = random(400,1500);

  zenia = createSprite(50,200,50,50);
  zenia.velocityX = speed;

  tourus = createSprite(50,400,50,50);
  tourus.velocityX = speed;

  cyclap = createSprite(50,600,50,50);
  cyclap.velocityX = speed;
  
  wall = createSprite(1500,100,60,1500);

}

function draw() {
  background("lightblue"); 
if(wall.x-zenia.x<(zenia.width+wall.width)/2){
zenia.velocityX= 0;
var deformation= 0.5*weight*speed*speed/22509
console.log(deformation)
if(deformation>180){
  zenia.shapeColor = "red" 
}
if(deformation<180 && deformation>100){
  zenia.shapeColor = "yellow" 
}
if(deformation<100){
  zenia.shapeColor = "green" 
}
}

if(wall.x-tourus.x<(tourus.width+wall.width)/2){
  tourus.velocityX= 0;
  var deformation= 0.5*weight*speed*speed/22509
  if(deformation>180){
    tourus.shapeColor = "red" 
  }
  if(deformation<180 && deformation>100){
    tourus.shapeColor = "yellow" 
  }
  if(deformation<100){
    tourus.shapeColor = "green" 
  }
  }

  if(wall.x-cyclap.x<(cyclap.width+wall.width)/2){
    cyclap.velocityX= 0;
    var deformation= 0.5*weight*speed*speed/22509
    if(deformation>180){
      cyclap.shapeColor = "red" 
    }
    if(deformation<180 && deformation>100){
      cyclap.shapeColor = "yellow" 
    }
    if(deformation<100){
      cyclap.shapeColor = "green" 
    }
    }
    
  



  drawSprites();
}