const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9;
var box10, box11, box12;
var box13, box14;
var box15;

var bg="day.jpg";
var bgImage;

var polygon;
var score = 0;

function preload(){
    getBG();
//bgImage=loadImage("night.jpeg");
}

function setup(){
    createCanvas(1000, 600);

    engine=Engine.create();
    world=engine.world;

    //first layer
    ground1 = new Ground(500, 500, 300, 10);
    box5 = new Box (420, 480, 30, 40);
    box4 = new Box (460, 480, 30, 40);
    box1 = new Box(500, 480, 30, 40);
    box2 = new Box (540, 480, 30, 40);
    box3 = new Box (580, 480, 30, 40);
    
    //second layer
    box6 = new Box(440, 440, 30, 40);
    box7 = new Box (480, 440, 30, 40);
    box8 = new Box (520, 440, 30, 40);
    box9 = new Box (560, 440, 30, 40);

    //third layer
    box10 = new Box(460, 400, 30, 40);
    box11 = new Box(500, 400, 30, 40);
    box12 = new Box(540, 400, 30, 40);

    //fourth layer
    box13 = new Box(480, 360, 30, 40);
    box14 = new Box(520, 360, 30, 40);

    //last layer
    box15 = new Box(500, 320, 30, 40);

    polygon = new hexagon(100, 450, 40, 40);

    slingShot1 = new SlingShot(polygon.body, {x: 100, y: 450});

}

function draw(){
    if (bgImage){
        background(bgImage);
    }
    Engine.update(engine);

    textSize(20);
    text("Score: "+ score, 500, 100);

    ground1.display();
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    slingShot1.display();

    polygon.display();

    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot1.fly();
}


function keyPressed (){
 if(keyCode===32){
	 //Matter.Body.setPosition(stone1.body, {x: 200, y:450});
	 slingShot1.attach(polygon.body);
 }
}

async function getBG(){
        var response = await fetch ("http://worldtimeapi.org/api/timezone/America/Toronto");
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        var hrs = datetime.slice(11, 13);
        console.log (hrs);
        if (hrs>=06 && hrs <=19){
            bg="day.jpg";
        } else {
            bg="night.jpeg";
        }
        bgImage=loadImage(bg);
} 
