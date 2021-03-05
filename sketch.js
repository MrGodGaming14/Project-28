
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

	mango = new Mango(50, 200, 10);

	boy = createSprite(247, 567, 1697 ,	2400)
	boy.addImage(boyImage)
	boy.scale = 0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gainsboro");
  
  
  drawSprites();
  mango.display();
  tree.display();
  stoneObj.display();
  ground.display();

  slingshot.display();
 
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
