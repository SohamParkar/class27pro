
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	groundSprite = createSprite(width / 2, height -600, width, 10);
	groundSprite.shapeColor = color(255)
    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background('white');
  
  drawSprites();
 
}



