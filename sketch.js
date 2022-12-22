var alien, alienimg;
var invader,invaderimg;
var space,spaceimg;
var bullet, bulletimg;
var gamestate = "play";



function preload(){
    bulletimg = loadImage("bullet.png");
    alienimg = loadImage("alien.png");
    invaderimg = loadImage("invader.png");
    spaceimg = loadImage("space.png");
}

function setup() {
 createCanvas (600,600);
 space = createSprite (600,600);
 space.addImage (spaceimg);
 space.velocityY = 1;

invader = createSprite (200,200,50,50);
invader.addImage (invaderimg);
invader.scale = 0.05;

}

function draw() {
 background (spaceimg);
 if (keyDown(LEFT_ARROW)){
    invader.x = invader.x-3;
 }
 if (keyDown(RIGHT_ARROW)){
    invader.x = invader.x+3;
 }
 if (keyDown(UP_ARROW)){
    invader.y = invader.y-3;
 }
 if (keyDown(DOWN_ARROW)){
    invader.y = invader.y+3;
 }
 if (keyDown ("space")){
bullet= createSprite (200,-50);
 bullet.addImage (bulletimg);
 bullet.scale=0.01;
 bullet.x= invader.x;
 bullet.y=invader.y;
bullet.velocityY = -1;
 }
 
 spawnAlien();
 drawSprites ();
}
function spawnAlien (){
        if (frameCount%240===0){
          alien = createSprite (200,-50);
          alien.addImage (alienimg);
          alien.scale = 0.1;
          alien.x = Math.round (random (120,400));
          alien.velocityY = 1;
          alien.lifetime = 800;
        invader.depth = invader.depth;
        invader.depth = invader.depth + 1;
        }
      }

