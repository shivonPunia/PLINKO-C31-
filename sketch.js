const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(480,750,10,50);

}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for (var k = 0; k <= width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 0; j <= width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = -15; j <= width-30; j=j+50){
    plinkos.push(new Plinko(J,375));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  ground.display();

  drawSprites();
}