var fixedRect, movingRect;
var gm1, gm2 , gm3 , gm4 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gm1 =createSprite(100,100,50,75);
  gm1.shapeColor = "green";
  gm2 =createSprite(200,100,50,75);
  gm2.shapeColor = "green";
  gm3 =createSprite(300,100,50,75);
  gm3.shapeColor = "green";
  gm4 =createSprite(400,100,50,75);
  gm4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gm1))
 {
    movingRect.shapeColor = "red";
    gm1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gm1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
      return true;
    }
    else {
      return false ;
    }
}