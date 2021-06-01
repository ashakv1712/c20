class Snow {
  constructor(x, y) {
    var options = {
      friction: 0.5,
      restitution: 0.4,
    };

    this.image = loadImage("snow4.webp");
    this.body = Bodies.circle(x, y, 50, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("pink");
    image(this.image, 0, 0, 70, 70);
    pop();
  }
}
