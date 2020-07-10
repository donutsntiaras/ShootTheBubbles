class Saber{
    constructor(){}

    updateS(){
        for (var i = 0; i < lightSaber.length; i++) {

            //check bubble collisions
            for (var z = 0; z < bubble.length; z++) {
                if (dist(lightSaber[i].x, lightSaber[i].y, bubble[z].x, bubble[z].y) < bSize / 2) {
                    bubble[z] = createVector(random(0, width), random(0, height));
                    bVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                    Score += 10;
                }
            }
            lightSaber[i].add(sVel[i]);
    
            push();
            stroke(132, 112, 255);
            //point(lasers[i].x,lasers[i].y);
    
            line(lightSaber[i].x, lightSaber[i].y, lightSaber[i].x + sVel[i].x * 4, lightSaber[i].y + sVel[i].y * 4)
    
            pop();
        }
    }
}



