const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ;


function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
       ground = new Ground(200,300,200,20);
}
function draw(){
    background(0);

    ground.display();
 //   drawsprites();

}