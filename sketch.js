var garden,rabbit;
var appleImg,leafImg,gardenImg,rabbitImg;
var apple,leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.x = mouseX;
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 5;
  apple.scale=0.05;
  
  
}
function createLeaves() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY = 5;
  leaf.scale=0.1;
}
function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0) {
  if(select_sprites == 1) {
    createApples();
  }
  else {
    createLeaves();
  }
}

drawSprites();
}

