class BaseClass{
    constructor(){
        var options={
        isStatic:true
        }
        
        this.leftX=width/2-100;
        this.leftY=height-85;
        this.leftBody=Bodies.rectangle(this.leftX,this.leftY,20,100,options);
        World.add(world,this.leftBody);

        this.rightX=width/2+100;
        this.rightY=height-85;
        this.rightBody=Bodies.rectangle(this.rightX,this.rightY,20,100,options);
        World.add(world,this.rightBody);

        this.bottomX=width/2    
        this.bottomY=height-35;
        this.bottomBody=Bodies.rectangle(this.bottomX,this.bottomY,200,20,options);
        World.add(world,this.bottomBody);
        this.image=loadImage("dustbingreen.png");

    }
    display(){
    rectMode(CENTER);
    fill("red");
    rect(this.leftX,this.leftY,20,100);
    rect(this.rightX,this.rightY,20,100);
    rect(this.bottomX,this.bottomY,200,20);


    }
}