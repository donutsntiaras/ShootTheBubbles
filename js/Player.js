class Player{
    constructor(){}

    upP(){     

    if (keyIsDown(LEFT_ARROW)) {
        header -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        header += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        
    }

    
    if (player.x > 400) {
        player.x = 0
    }
    if (player.x < 0) {
        player.x = 400
    }
    if (player.y > 400) {
        player.y = 0
    }
    if (player.y < 0) {
        player.y = 400
    }

    
    pVel.mult(0.978);
    player.add(pVel);
    
    push();
    translate(player.x, player.y);
    rotate(radians(heading));
           

    }
}



