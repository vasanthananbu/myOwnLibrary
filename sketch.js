var fixedRect
var movingRect
var gameObject1, gameObject2, gameObject3, gameObject4;



function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(400,200,50,80);
  movingRect = createSprite(600,100,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityX = -2;

  fixedRect.debug = "true";
  movingRect.debug = "true";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  //object1.x = World.mouseX;
  //object1.y = World.mouseY;

  if(isTouching(movingRect, gameObject4)){
    gameObject4.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameObject4.shapeColor = "green";
    movingRect.shapeColor = "green";
  } 

  bounceOff(movingRect,gameObject4);

  drawSprites();
}