class Chain{
 constructor(bodyA,bodyB){

    var opitions = {
      bodyA:bodyA,
      bodyB:bodyB,
      stiffness:0.04,
      length:10,
    }
    this.Chain = Constraint.create(opitions);
    World.add(world,this.Chain);
 }
    display(){
     var pointA = this.Chain.bodyA.position;
     var pointB = this.Chain.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
        
    
}