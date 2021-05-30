function preload() {
    koala_image=loadAnimation("Koala.jpg")
}

function setup() {
    createCanvas(400, 400);
    var koala=createSprite(200,200,40,40);
koala.addAnimation("still",koala_image);
}
function draw() {
    background("yellow");
    text("Koala",100,100);
    drawSprites();
}