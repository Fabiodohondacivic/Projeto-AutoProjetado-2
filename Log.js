class Log extends BaseClass{
    constructor(x,y,height,angle){
      fill("purple");
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
    }
  }
