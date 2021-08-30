const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var zombie1,zombie1Img,zombie2,zombie2Img;
var bg;

var agent1,agent1Img;

var bullet,bulletImg;

var gameState = "fight";
  
var bullets = 50;

function preload(){
zombie1Img = loadImage("images/zombie1.png");
bg = loadImage("images/scarybackground.jpg");
zombie2Img = loadImage("images/zombie2.png");
bulletImg = loadImage("images/bullet.png")
agent1Img = loadImage("images/ncp1.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);
agent1 = createSprite(150,height-100,10,-50);
agent1.addImage(agent1Img);
//agent1.scale = 0.1;
//agent1.velocityX = 5;

agent1.setCollider("rectangle",0,0,300,300)
zombieGroup = new Group();

bulletGroup = new Group();

}    

function draw(){
background(bg);

if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(gameState === "fight"){
  if(keyDown("UP_ARROW")){
        agent.y = agent.y-30
      }
      
      if(keyDown("DOWN_ARROW")){
       agent.y = agent.y+30
      }
      
      if(keyDown("LEFT_ARROW")){
        agent.x = agent.x-30
      }
      
      if(keyDown("RIGHT_ARROW")){
       agent.x = age.x+30
      }
if(keyWentDown("space")){
bullet = createSprite(200,height-120,10,20);
bullet.addImage(bulletImg);
bullet.scale = 0.1;
bullet.velocityX= 10
bulletGroup.add(bullet);
bullets = bullets-1;

}


if(bulletGroup.isTouching(zombieGroup)){
        zombieGroup.desroyEach();
        gameState === "lost";
}

spawnZombie();
  }

  
drawSprites()
}

function spawnZombie(){
    if (frameCount % 100 === 0){
      var zombie = createSprite(width-100,height-100,10,50);
      zombie.velocityX = -6;
   
      
       // //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: zombie.addImage(zombie1Img);
                 break;
         case 2: zombie.addImage(zombie2Img);
                 break;
         case 3: zombie.addImage(zombie3Img);
                 break;                           
        
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       //zombie.scale = 0.3    ;
       zombie.lifetime = 300;
      
      //adding obstacles to the group
      zombieGroup.add(zombie);
    }
   }

 
   