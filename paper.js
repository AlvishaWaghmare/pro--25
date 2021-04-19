class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            densiy:1.2
        }
        this.x=x;
		this.y=y;
        this.r=r
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body);
     
}
display(){

    var paperPosition=this.body.postion;
    push ()
    translate (paperPosition.x, paperPosition.y);
    rectMode(CENTRE)
    strokeWeight(4);
    Fill (255,0,255);
    
}
 