const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "SERVE1";
var black1, black2, black3, black4,black5, black6, black7, black8, black9;
    var white1, white2, white3, white4, white5, white6, white7, white8, white9;
    var red, striker; 
    

function preload() {
    backgroundImg = loadImage("sprites/board.jpg");

    


}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    black1 = new Black(302,268, 15);
    black2 = new Black(330,313, 15);
    black3 = new Black(330,343, 15);
    black4 = new Black(330,253, 15);
    black5 = new Black(357,297, 15);
    black6 = new Black(274,253, 15);
    black7 = new Black(274,313, 15);
    black8 = new Black(274,343, 15);
    black9 = new Black(248,297, 15);

    white1 = new White(302,327,15);
    white2 = new White(302,357,15);
    white3 = new White(302,238,15);
    white4 = new White(330,283,15);
    white5 = new White(357,267,15);
    white6 = new White(357,327,15);
    white7 = new White(248,267,15);
    white8 = new White(274,283,15);
    white9 = new White(248,327,15);

    red = new Red(302,298,15);


    striker = new Striker(302, 520, 20)

    


    
    


   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

if(gameState === "SERVE1"){
    Matter.Body.setPosition(striker.body, {x: 302, y: 524})
}


black1.display();
black2.display();
black3.display();
black4.display();
black5.display();
black6.display();
black7.display();
black8.display();
black9.display();

white1.display();
white2.display();
white3.display();
white4.display();
white5.display();
white6.display();
white7.display();
white8.display();
white9.display();

red.display();
striker.display();




text(mouseX+ "," + mouseY, mouseX,mouseY);
  


}

/*function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX, y: mouseY})
}*/

function mouseClicked(){
    console.log("Hi")
    Matter.Body.setVelocity(striker.body, -0.5)
    Matter.Body.setStatic(striker.body, false)
}
