const particles = [];

function setup(){
    let myCanvas2 = createCanvas(800, 550);
    myCanvas2.parent("visual");
    for(let i = 0; i < 24; i++){
        particles[i] = new Particles();
    }
}

function draw(){
    background(255);
    particles.forEach((p, index)=>{
        p.display();
        p.update();
        p.checkEdges();
        p.checkParticles(particles.slice(index));
    });
}

class Particles{
    constructor(){
        this.pos = createVector(random(width/2), random(height/2));
        this.vel = createVector(random(-3, 3), random(-3, 3));
    }

    display(){
        noStroke();
        nofill();
        ellipse(this.pos.x, this.pos.y, 5, 5);
    }

    update(){
        this.pos.add(this.vel);
    }

    checkEdges(){
        if(this.pos.x <= 200 || this.pos.x >= width-200){
            this.vel.x *= -1;
        }

        if(this.pos.y <= 100 || this.pos.y >= height-100){
            this.vel.y *= -1;
        }
    }

    checkParticles(particles){
        particles.forEach(particle =>{
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if(d < 120){
                stroke(122, 204, 255, 100);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}