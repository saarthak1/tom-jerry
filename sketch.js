
var cat,rat,back;



function preload() {
    //load the images here
    ca=loadAnimation("images/cat2.png");
    ba=loadAnimation("images/garden.png")
    ra=loadAnimation("images/mouse2.png")
 


}

function setup(){
    createCanvas(590,480);

back =createSprite(200,200,400,400);
back.addAnimation("jj",ba);
back.scale=0.8;
cat=createSprite(450,400,10,10);
cat.addAnimation("hi",ca);
cat.scale=2
rat=createSprite(100,400,10,10);
rat.addAnimation("by",ra);
rat.scale=0.1

cat.scale=0.10
}

function draw() {
    background(230)
if (keyDown("space"))  {
cat. velocityX=-2;

}
if(cat.collide(rat)) {
    Text(200,200,Poor);
}


    drawSprites();
}



