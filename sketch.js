
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;
var dustbinImage

function preload(){
	dustbinImage=loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,600,10);
	
	ground=new Ground(400,680,800,20);

	dustbin=new Dustbin(650,630,100,20);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.5;


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);

  Engine.update(engine);
  ground.display();
  dustbin.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
  }


