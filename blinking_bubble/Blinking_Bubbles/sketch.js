//create class Drop
class Drop {
  x = random(0, width);
  y = random(-200, -100);
  len = random(8, 25);
  z = random(0, 20);
  len = map(this.z, 0, 20, 1, 20);
  ySpeed = map(this.z, 0, 20, 1, 20);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  w = random(25, 40);
  constructor() {
    //  this.length;
  }

  fall() {
    this.y += this.ySpeed;
    let grav = map(this.z, 0, 20, 0, 0.3);
    if (this.y >= height) {
      this.y = random(-200, -100);
      this.ySpeed = map(this.z, 0, 20, 4, 10);
    }
  }

  show() {
    //stroke(255, 0, 0);
    //strokeWeight(random(2, 5));
    //ellipse(this.x, this.y, this.w)
    //line(this.x, this.y, this.x, this.y + this.len);
    //console.log(drops[50].len);
    let c = color(this.r, this.g, this.b); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    //  noStroke(); // Don't draw a stroke around shapes
    ellipse(this.x, this.y, this.w)
  }

}

//Drop d;
let drops = [];

function setup() {
  createCanvas(1300, 600);
  background(255);
  //img = loadImage('./snow_scenery.jpg');
  for (var i = 0; i < 250; i++) {
    drops[i] = new Drop();
  }
  //console.log("i ", i);
}

function draw() {
  background(0);
  for (var i = 0; i < 250; i++) {
    drops[i].fall();
    drops[i].show();
  }
}