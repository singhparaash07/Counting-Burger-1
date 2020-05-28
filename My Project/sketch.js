var bg ;
var pointer;
var x = 572;
var button;
var burgerGroup;
var player_Animation;
var player;
var score =0;

function preload (){
bg = loadImage ("kitchen.png");
burger_img = loadImage ("burger.png");
player_Animation = loadAnimation("Animation/1.png","Animation/2.png","Animation/3.png","Animation/4.png","Animation/5.Png","Animation/6.Png");
}

function setup() {

  createCanvas(displayWidth , 600);
  player = createSprite (displayWidth/2 ,400);
  player.addAnimation("player",player_Animation);
  player.scale =3.5;
   pointer = createSprite (100,100,50,50);
  burgerGroup = new Group();
   button = createButton("play");
   
 button.position (displayWidth-200,50);
  }

function draw() {
  background(bg);  
 button.mousePressed(()=>{
  createBurgers();
  displayScore ();
 });

 
  drawSprites();
}

function createBurgers (){
burgerGroup.destroyEach();



var rand = Math.round(random (1,6));

score = rand;
x = 572 ;
for(var i = 0; i<rand; i++){
  var burger = createSprite (200,x);
  burger.addImage (burger_img);
  burger.scale = 0.7;
  burger.debug =true;
  burger.setCollider("rectangle",0,0,burger.width,burger.height-50);
  
  x=x-100;
  burgerGroup.add(burger);
}

}
function displayScore () {
fill ("white");
textSize (100);
text ("score:"+score,800,50);

}


