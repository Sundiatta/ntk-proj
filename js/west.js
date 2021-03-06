const particles = [];

function setup(){
    let myCanvas = createCanvas(240, 640);
    myCanvas.parent("container-1");
    for(let i = 0; i < 130; i++){
        particles[i] = new Particles();
    }
}

function draw(){
    background(255);
    par();
}

function par(){
    particles.forEach((p, index)=>{
        p.display();
        p.update();
        p.checkEdges();
        p.checkParticles(particles.slice(index));
    });
}

class Particles{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
    }

    display(){
        noStroke();
        noFill();
        ellipse(this.pos.x, this.pos.y, 5, 5);
    }

    update(){
        this.pos.add(this.vel);
    }

    checkEdges(){
        if(this.pos.x <= 0 || this.pos.x >= width){
            this.vel.x *= -1;
        }

        if(this.pos.y <= 0 || this.pos.y >= height){
            this.vel.y *= -1;
        }
    }

    checkParticles(particles){
        particles.forEach(particle =>{
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if(d < 120){
                stroke(255, 158, 211, 100);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}