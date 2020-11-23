var rect1,rect2


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 200, 50, 50);
  rect1.velocityX = 3;
  rect1.shapeColor = "blue";              
  rect2 = createSprite(600, 200, 50, 50);
  rect2.velocityX = -3; 
  rect2.shapeColor = "orange";
}

function draw() {
  background(0);  
  drawSprites();

if(rect1.x-rect2.x<=rect2.width/2+rect1.width/2&&
  rect2.x-rect1.x<=rect2.width/2+rect1.width/2){
    rect1.velocityX = -rect1.velocityX;
    rect2.velocityX = -rect2.velocityX;
  }





}