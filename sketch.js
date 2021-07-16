var mario;
var platformGroup;
function preload()
{
 
}

function setup() {
  createCanvas(displayWidth,displayHeight);
platformGroup=createGroup();
  var countDistanceX = 0;
  var platform;
  var gap;
  console.log(countDistanceX);
  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
      console.log(countDistanceX);
     }

     mario=new Player();
 
}

function draw() {
  background('skyblue');  
  translate(-mario.spt.x+width/2,0);
  mario.applyGravity();
  mario.spt.collide(platformGroup)
  if(keyDown("right")){
    mario.moveRight();
  }
  if(keyDown("left")){
    mario.moveLeft();
  }
  if(keyDown("up")){
    mario.jump();
  }
  drawSprites();
}



