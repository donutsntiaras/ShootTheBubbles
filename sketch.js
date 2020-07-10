var bubble = [];
var bVel = [];
var bSize = 20;
var score = 0;
var player, pVel, force, size;
var lightSaber = [];
var sVel = [];
var header;
var touch;
var playerColor;

function setup() {
    createCanvas(400, 400);
    player = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    header = 0;
    
    playerColor = color(255);      

    for (var i = 0; i < 5; i++) {
        bubble.push(createVector(random(0, width), random(0, height)));
        bVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function keyPressed() {
     
    if (keyCode == 32) {        
        lightSaber.push(createVector(player.x, player.y));
        sVel.push(p5.Vector.fromAngle(radians(header)).mult(7));
    }
}

function draw() {
    background(0);
    fill(255);
    text(Score, 25, 25); 
    upP();
    updateB();
    updateS();

}