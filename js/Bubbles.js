class Bubbles{
    constructor(){}
    
    updateB(){
        touch = false;
    for (var i = 0; i < bubble.length; i++) {
        push();
        //bubbles collide
        if (dist(bubble[i].x, bubble[i].y, player.x, player.y) < bSize / 2) {
            touch = true;
            console.log(touch);
        }
        //location coordinates
        bubble[i].add(bVel[i]);

        
        if (bubble[i].x > width + bSize / 2) {
            bubble[i].x = 0
        }
        if (bubble[i].x < -bSize / 2) {
            bubble[i].x = 400
        }
        if (bubble[i].y > height + bSize / 2) {
            bubble[i].y = 0
        }
        

        fill(102, 110, 255, 145)
        stroke(255);
        ellipse(bubble[i].x, bubble[i].y, bSize);
        pop();
    }
    
    }
}