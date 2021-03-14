
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpet;
var box;
var ground;

function preload(){
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,670,width,20);
	 crumpet= new Paper(50,400,20);
	box= new Dustbin();
  
}


function draw() {
  rectMode(CENTER);
  background("red");
Engine.update(engine);
crumpet.display();
box.display();
ground.display(); 
              

 
}


function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpet.body,crumpet.body.position,{x:0.05,y:-0.05});
        
    }
      
  }

