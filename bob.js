class Bob {

    constructor(x,y,radius) {
        var Options = {
            'restitution':1,
            'isStatic':false,
            'friction':0,
            'density':0.8
        }
    this.body = Bodies.circle(x,y,radius/2,Options);
    this.radius = radius;

    World.add(world, this.body);
    }

    display(){
    // var angle =this.body.angle;

    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    // rotate(angle);
    fill(255,0,255);
    
    ellipse(0,0,this.radius,this.radius);
    pop();

       
    }

   
}


