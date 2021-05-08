const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball,you;
var slingShot;
var img,backgroundImg,bg;
var score = 0

function preload(){
 img=loadImage("polygon.png");
 dateAndTime ()
 
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);

  //ground
  ground = new Ground();
  
  //stands
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //First level
  blocks10=new Block(300 ,275,30,40);
  blocks11=new Block(330 ,275,30,40);
  blocks12=new Block(360 ,275,30,40);
  blocks13=new Block(390 ,275,30,40);
  blocks14=new Block(420 ,275,30,40);
  blocks15=new Block(450 ,275,30,40);
  blocks16=new Block(480 ,275,30,40);

  //Second level
  blocks17=new Block(330 ,235,30,40);
  blocks18=new Block(360 ,235,30,40);
  blocks19=new Block(390 ,235,30,40);
  blocks20=new Block(420 ,235,30,40);
  blocks21=new Block(450 ,235,30,40);

  //Third level
  blocks22=new Block(360 ,195,30,40);
  blocks23=new Block(390 ,195,30,40);
  blocks24=new Block(420 ,195,30,40);
  
  //Fouth level
  blocks25=new Block(390 ,155,30,40);


  //set two 
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  
  //level three
  blocks9 = new Block(700,95,30,40);

  //polygon
  you = new Player(50,200,30,30);

  //ball  with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  //sling
  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
 if(backgroundImg) 
 background(backgroundImg)


  Engine.update(engine);
 
 // ground.display();
  strokeWeight(2);
  stroke(15);
  fill("brown");
  stand1.display();
  stand2.display();
  

  stroke(15)
  fill(134, 205, 233)
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();
  

  stroke(15)
  fill(63, 224, 208)
  blocks6.display();
  blocks7.display();
  blocks8.display();

  blocks22.display();
  blocks23.display();
  blocks24.display();

 
  

  stroke(15)
  fill("pink")
  blocks9.display();
  
  blocks17.display();
  blocks18.display();
  blocks19.display();
  blocks20.display();
  blocks21.display();
  

  stroke(15)
  fill("black")
  blocks25.display();

  
  stroke(15)
  fill("white")
  textFont("Amatic AC");
  text("🧐 😏 PULL AND RELEASE THE STONE TO SHOOT !!! 😏 🧐",100,100)

  
  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);
    
  slingShot.display();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
  blocks15.score();
  blocks16.score();
  blocks17.score();
  blocks18.score();
  blocks19.score();
  blocks20.score();
  blocks21.score();
  blocks22.score();
  blocks23.score();
  blocks24.score();
  blocks25.score();
  
    

  textSize(35)
  fill("white")
  text("score : " +score, 100,50)
  console.log(score)  
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});}

function mouseReleased(){
  slingShot.fly();}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball)
  }
}

async function dateAndTime (){
  var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var timetype = await time.json()
  console.log(timetype)
  var datetime = timetype.datetime
  console.log(datetime)
  var hour = datetime.slice(11,13)
  console.log(hour)
  if (hour>= 06 && hour<= 18){
      bg = "bg2.jpg"
  }else {
      bg = "bg.jpg"
  }
  backgroundImg = loadImage(bg)
}