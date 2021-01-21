class Chain {

constructor(bodyC,bodyD){
    var options={
        bodyA:bodyC,
        bodyB:bodyD,
        length:10,
        stiffness:0.004,

    }

    this.chain=Constraint.create(options)
    World.add(world,this.chain)

}

display(){
push();
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;

    strokeWeight(4.5);
    line(pointA.x,pointA.y,pointB.x,pointB.y)

    pop();

}

}