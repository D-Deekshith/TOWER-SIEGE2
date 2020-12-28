class Block1 extends Block{
    constructor(x,y,width,height){
        super(x,y,30,40);
        this.image = loadImage('sprite/bluebox.png');
        this.visibility = 255;
    }
    display(){
    
        if(this.body.speed > 5){
          //pig was hit 
          push();
          World.remove(world,this.body);
          imageMode(CENTER);
          tint(225,this.visibility);
          this.visibility = this.visibility-200
          image(this.image,this.body.position.x,this.body.position.y,30,40);
          pop();
        }
        else{
          //pig was not hit
          super.display();
    
        }
      }

        score(){
        if(this.visiblity < 0 && this.visiblity > -105){
          score++
         }
        }
      
}