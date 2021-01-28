var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cat,catImage
var mouse,mouseImage
var garden,gardenImage;
var cat_running;
var cat_collided;
function preload(){
  cat_running= loadAnimation("cat2.png","cat3.png");
  cat_collided= loadAnimation("cat4.png");
catImage=loadImage("cat1.png");
mouseImage=loadImage("mouse1.png");
gardenImage=loadImage("garden.png");
}
function setup() {
  createCanvas(800,400);
  cat.addAnimation("running",cat_running);
  cat.addAnimation("collided",cat_collided);

cat = createSprite(400, 200, 50, 50)
cat.addImage("cat,catImage")

mouse= createSprite(300, 300, 50, 50);
cat.addImage("mouse,mouseImage")

garden=createSprite(400,200);
garden.addImage("the garden",gardenImage);
}

function draw() {

  if(gameState === PLAY){

    if(cat.isTouching(mouse)){
      cat.changeAnimation("running", cat_running);
      gameState = END;

      else if (gameState === END) {
        cat.changeAnimation("collided", cat_collided);
      }
    }

  }
  if(keyCode === LEFT_ARROW){
    
    cat.velocityX = -5;
    cat.addAnimation("cat_running",cat_running);
    cat.changeAnimation("cat_running");

  }
  
  
      
    



  drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW)
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
}
