var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "purple";
  movingRect.debug = true;
}

function draw() {
  background("black"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  drawSprites();

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y- fixedRect.y< movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "blue";
  }else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "white";
  }

}