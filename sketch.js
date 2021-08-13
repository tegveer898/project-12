var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,apple;
var leaveImg,leave;
var orangeleafImg,orangeleaf;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(800,800);
  
// Moving background
garden=createSprite(200,200,700,700);
garden.addImage("garden",gardenImg);
garden.scale = 2 ;
garden.x = garden.width/2;

//creating boy running

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit",rabbitImg);






}




function draw() {
  
 background ("white");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1 ){
    createAples();
  }
  else if (select_sprites == 2 ) {
   createOrange();
  }
else {
  leaf();
}
  }
  drawSprites();
}
function createAples(){
  apple = createSprite(random(50,450),10,20,20);
  apple.addImage("apple",appleImg);
  apple.scale = 0.05;
  apple.velocityY= 3;

}
function createOrange(){
  orangeleaf = createSprite (random(45,455),10,20,20);
  orangeleaf.addImage("orangeleaf",orangeleafImg);
  orangeleaf.scale = 0.08 ;
  orangeleaf.velocityY = 3;
}
function leaf (){
  
  leave = createSprite(random(40,400),10,20,20);
  leave.addImage("leave",leaveImg);
  leave.scale=0.05;
  leave.velocityY = 3 ;

}