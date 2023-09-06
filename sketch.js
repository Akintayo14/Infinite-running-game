var PLAY = 1
var END = 0
var gameState=1
var carrot, carrotImg
var rabbit, rabbitImg
var forest, forestImg
var score;
function preload(){
carrotImg = loadImage("carrot.png")
rabbitImg = loadImage("rabbit.png")
forestImg = loadImage("forest.jpg")

}

function setup() {
createCanvas(windowWidth, windowHeight)
forest = createSprite(width/2,200);
forest.addImage(forestImg)
forest.x = forest.width/2

carrot = createSprite(200,550,10,10)
 carrot.scale = 0.8
 carrot.addImage(carrotImg)

 rabbit = createSprite(800,550,20,20)
 rabbit.scale = 0.9
 rabbit.addImage(rabbitImg)

score = 0
}

function draw() {
if (gameState===PLAY){
edges= createEdgeSprites(); 
  rabbit.collide(edges);
  carrot.collide(edges)  
  forest.velocityX = -3
  score = score + Math.round(frameCount/60);

if(forest.x > 700 ){
    forest.x = width/2;
    }

    if(keyDown("space")){
        carrot.velocityY = 13;
    }
  }
drawSprites();
  
}

