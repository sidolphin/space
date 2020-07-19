var sun, mercury, venus, earth,mars,jupiter,uranus,saturn,neptune;
var sunImg, mercuryImg, venusImg, earthImg,marsImg,jupiterImg,uranusImg,saturnImg,neptuneImg;
var speed;

function preload(){
  sunImg=loadImage("sun.PNG");
  mercuryImg=loadImage("mercury.PNG");
  venusImg=loadImage("venus.PNG");
  earthImg=loadImage("earth.PNG");
  marsImg=loadImage("mars.PNG");
  jupiterImg=loadImage("jupiter.PNG");
  uranusImg=loadImage("uranus.PNG");
  saturnImg=loadImage("saturn.PNG");
  neptuneImg=loadImage("neptune.PNG");
}


function setup() {
  createCanvas(800,800);
  sun=createSprite(0, 0);
  sun.addImage("sun",sunImg);
  sun.scale=0.5
  sun.setCollider("circle",-85,-65,140);
  sun.debug=true;
  mercury=createSprite(70, 50);
  mercury.addImage("mercury",mercuryImg);
  mercury.scale=0.5
  mercury.setCollider("circle",30,0,30);
  mercury.debug=true;

  venus=createSprite(100, 50);
  venus.addImage("venus",venusImg);
  venus.scale=0.5

  earth=createSprite(130, 50);
  earth.addImage("earth",earthImg);
  earth.scale=0.5

  mars=createSprite(160, 50);
  mars.addImage("mars",marsImg);
  mars.scale=0.5

  jupiter=createSprite(190, 50);
  jupiter.addImage("jupiter",jupiterImg);
  jupiter.scale=0.5

  saturn=createSprite(220, 50);
  saturn.addImage("saturn",saturnImg);
  saturn.scale=0.5

  uranus=createSprite(250, 50);
  uranus.addImage("uranus",uranusImg);
  uranus.scale=0.5

  neptune=createSprite(280, 50);
  neptune.addImage("mars",marsImg);
  neptune.scale=0.5

  
}

function draw() {
  background(0);  
  angleMode(DEGREES);
   translate(width / 2, height / 2); 
   rotate(speed); 
   speed=speed+4
   
if (sun.collide(mercury)) {
   mercury.destroy();
   } 
   // angle = angle + anglespeed; 
   if (frameCount % 10 === 0) { 
     sun.scale = sun.scale + 0.01;
     }

  drawSprites();
}