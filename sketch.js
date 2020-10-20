var ghost,ghostI1,ghostI2;
var tower,towerI;
var climber,climberI,climberGroup;
var door,doorI,doorGroup;
var invisibleblock,invisibleGroup;
var gameState="PLAY";
var spookySound

function preload()
{
 ghostI1 = loadImage("ghost-jumping.png");
 ghostI2 = loadImage("ghost-standing.png");
  
 towerI = loadImage("tower.png" );
  
doorI = loadImage("door.png")
  
  climberI = loadImage("climber.png");
  
  spookySound = loadSound("spooky.wav")

  
}

function setup()
{
  createCanvas(600,600);
  
  
  spookySound.play()
  
  
   tower = createSprite(300,300,20,20);
  tower.addImage(towerI);
  
  
  ghost=createSprite(300,300,50,50)
  ghost.addImage(ghostI1);
  ghost.scale=0.3;
  
  
  
  
 tower.velocityY=3; 
  
  doorGroup = new Group(); 
  climberGroup = new Group(); 
  invisibleGroup = new Group(); 
  
  
  
}

function draw(){
  
  background(0);
  
  
  
  if(gameState==="PLAY"){
  if(tower.y>600) 
     
     {
     tower.y=300;
     }
  
   doors(); 
  
  if(keyDown("space")){
    
    ghost.velocityY=-8;
    
  }
  
  ghost.velocityY=ghost.velocityY+0.5
  
  if(keyDown("left")){
    
    ghost.x=ghost.x-5;
    
  }
  
  
  if(keyDown("right")){
    
    ghost.x=ghost.x+5;
    
  }
  
  if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0;
     ghost.addImage(ghostI2);
     }
      
  if(invisibleGroup.isTouching(ghost)||ghost.y>650){
     ghost.destroy();
    gameState="END";
     }
  
  
  drawSprites();
    
  }
  
  if(gameState==="END"){
    
    fill("yellow")
    textSize(40);
    text("GAME OVER",150,250);
     
    
    
  }
  
  
  
}

function doors(){
  
  if(frameCount%240===0){
     
    
     door=createSprite(Math.round(random(120,400)),-30); 
     door.addImage(doorI);
    door.velocityY=1;
    door.lifetime=700;  
     
    climber = createSprite(200,10);
    climber.addImage(climberI);
    climber.velocityY=1;
    climber.x=door.x;
    climber.lifetime=700;
    
    invisibleblock=createSprite(200,12,100,2);
    invisibleblock.debug=true;
    invisibleblock.x=climber.x;
    invisibleblock.velocityY=1;
    invisibleblock.lifetime=700;
    
    
    doorGroup.add(door)
    climberGroup.add(climber)
     invisibleGroup.add(invisibleblock);
    
    
      ghost.depth=door.depth;
      ghost.depth=ghost.depth+1;   
    
    
    
    
    
    
     }
  
  
}







