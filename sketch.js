var garden,rabbit,edges
var gardenImg,rabbitImg,appleImg,apple,leaves,leaf1
var leaf2,leaf3

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
leaf1 = loadImage("orangeLeaf.png")
leaf2 =  loadImage("leaf.png")
leaf3 = loadImage("redImage.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;


edges= createEdgeSprites()
}


function draw() {
  background(0);
 rabbit.x=World.mouseX

  rabbit.collide(edges);

  createApple()
  createLeaves()
  drawSprites();
}

function createApple(){
  


  apple=createSprite(random(50,350),40,10,10)
  apple.scale=0.05 
  apple.velocityY=2.5
  var r=Math.round(random (1,60))

  switch(r){
    case 1: apple.addImage(appleImg)
    break;
  }
  console.log(apple)
  
}

function createLeaves(){
  
 
    leaves=createSprite(random(50,350),40,10,10)
    leaves.scale=0.05
    leaves.velocityY=2
    var r=Math.round(random (1,80))
    switch(r){
    case 1 : leaves.addImage(leaf1)
    break;
    
    case 2  : leaves.addImage(leaf3)
    break;
    
    case 3 : leaves.addImage(leaf2)
    break;
      


  }
  console.log(leaves)
  
  }












