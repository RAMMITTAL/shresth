const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var option = {restitution:1.0}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
ball = Bodies.circle(200,100,30,option)
World.add(world,ball)
ball2 = Bodies.circle(150,200,20,option)
World.add(world,ball2)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    circle(ball.position.x,ball.position.y,30)
    circle(ball2.position.x,ball2.position.y,30)
    rect(ground.position.x,ground.position.y,400,20);
}