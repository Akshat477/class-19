var rect1,rect2;


function setup() {
  createCanvas(800,400);
  rect1 =  createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue"
  rect2 = createSprite(400,300,50,50);
  rect2.shapeColor = "green"
}

function draw() {
  background("black");
  
  rect2.y = World.mouseY;
  rect2.x = World.mouseX;

  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.x - rect1.x < rect2.width/2 + rect1.width/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
   rect1.shapeColor = "orange";
  }
  else{
    rect1.shapeColor = "blue"
  }

  drawSprites();
}