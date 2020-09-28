const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {isStatic: true};
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);


  var ball_options = {restitution: 0.7}
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}

/*
ellipse() - oval shape
ellipse(x, y, r1, r2)
if r1 = r2 ---> circle


Physics Engine 
- box2d, p2.js, matter.js

MATTER LIBRARY

1. Engine --> Universe --> Follows all the laws of Physics
          Matter.Engine
2. World -> Physical World which can be changed according our needs & contain the objects
          Matter.World
3. Bodies --> Objects
          Matter.Bodies

NameSpacing ---> Nicknaming
*/