class Mango{
    constructor(x, y, r){
        var options={
            isStatic:true,
            restitution: 0,
            friction: 1
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("sprites/mango.png")
        this.body= Bodies.rectangle(x,y,r,r);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}