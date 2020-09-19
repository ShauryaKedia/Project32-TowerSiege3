class Block {
    constructor(x, y, width, height){
      var options = {
        restitution:1,
        friction:100
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblty = 255

    }
    display(){
     if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
     }
     else{
      World.remove(world,this.body) 
      push()
      this.visiblity = this.visiblity-5
      tint(255,this.visiblity)
      pop()
     }
    }

    score(){
      if(this.Visiblity < 0 && this.Visiblity > -105){
        score++
    }
  }
  
  };

  