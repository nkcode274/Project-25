class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/dustbingreen.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);

      

      image(this.image, this.body.position.x, this.body.position.y, this.width, this. height);
    }
  };