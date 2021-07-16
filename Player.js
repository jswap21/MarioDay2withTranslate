class Player{

constructor(){

    this.spt=createSprite(200,200,100,100);
    this.spt.shapeColor="blue";
}

applyGravity(){
this.spt.velocityY=this.spt.velocityY+2;
}
moveRight(){

    this.spt.x=this.spt.x+20;
}

moveLeft(){
    this.spt.x=this.spt.x-20;
}

jump(){
    this.spt.velocityY=-21;
}

}