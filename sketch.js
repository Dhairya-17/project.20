var garden,gardenImg;
var tom,catImg,catImg2,catImg3;
var jerry,mouseImg,mouseImg2,mouseImg3;



function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png");
catImg=loadAnimation("images/cat1.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadAnimation("images/cat4.png")

mouseImg=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(400,250)
    garden.addImage(gardenImg)
    garden.scale=1.5;
   

    //create tom and jerry sprites here

    tom=createSprite(700,650,10,10)
    tom.addAnimation("catsleeping",catImg)
    tom.scale=0.08;
    tom.debug=true;

   jerry=createSprite(200,650,10,10)
    jerry.addAnimation("mousestanding",mouseImg)
    jerry.scale=0.08;

}

function draw() {

    background(225);
    drawSprites();
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
 //For moving and changing animation write code here

 tom.velocityX=0
 tom.addAnimation("tomishappy",catImg3)
 tom.changeAnimation("tomishappy");
 tom.x=jerry.x+40;

 jerry.addAnimation("jerryishappy",mouseImg3)
 jerry.changeAnimation("jerryishappy")
    }

}

function keyPressed(){

if(keyCode===LEFT_ARROW){
    tom.velocityX=-3;
    tom.addAnimation("catisangry",catImg2)
    tom.changeAnimation("catisangry");
   
    tom.scale=0.09;

    jerry.addAnimation("mouseisteasing",mouseImg2)
    jerry.changeAnimation("mouseisteasing")
    jerry.frameDelay=25;
    
    
}
}
