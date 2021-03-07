
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var boy, boyImage;
var gameState = 0;
function preload()
{
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	

	ground = new Ground(900,  695, 1800, 10);

	stoneObj = new stone(137, 443, 150, 93)

	tree = new Tree(1184, 382, 603, 681)

	slingshot = new SlingShot(stoneObj.body,{x:137, y:443});

	mango1 = new Mango(985, 265, 5);
    mango2 = new Mango(1083, 228, 5);
    mango3 = new Mango(1182, 236, 5);
    mango4 = new Mango(1230, 120, 5);
    mango5 = new Mango(1292, 251, 5);

	boy = createSprite(247, 567, 1697 ,	2400)
	boy.addImage(boyImage)
	boy.scale = 0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gainsboro");
  
  
  drawSprites();
  
  tree.display();

  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  mango5.display();
  
  stoneObj.display();
  ground.display();

  slingshot.display();


  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);

  
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32) {
        Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
        slingshot.attach(stoneObj.body);
    }
}


function detectCollision(stone, mango){
    mangoBodyPosition = mango.body.position
    stoneBodyPosition = stoneObj.body.position

    var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if (distance<=mango.r+stone.r){
        Matter.Body.setStatic(mango.body, false);
    }
}
