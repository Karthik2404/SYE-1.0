const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img , circleImg ;


function preload()
{
  bg_img = loadImage('BG.png');
  circleImg = loadImage('Circle.png');
  tree1 = loadImage('Tree1.png');
  tree2 = loadImage('Tree2.png');
  tree3 = loadImage('Tree3.png');
  tree4 = loadImage('Tree4.png');
}

function setup() 
{
  createCanvas(800,800);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  

  treesGroup = new Group();

}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  image(circleImg,75,75,width-150,height-150);

  Engine.update(engine);

  var x = random(80,680);
  var y = random(80,480);
  var tree = createSprite(x,y,10,40);
  tree.addImage(tree1);

  drawSprites();

  
}

function spawnTrees(){
  

     //generate random obstacles
    /* var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: tree.addImage(tree1);
               break;
       case 2: tree.addImage(tree2);
               break;
       case 3: tree.addImage(tree3);
               break;
       case 4: tree.addImage(tree4);
               break;
       default: break;
     }*/
    
     //assign scale          
     tree.scale = 0.5;
    //add each obstacle to the group
    treesGroup.add(tree);
  }
 
 