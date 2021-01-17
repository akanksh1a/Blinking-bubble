class Bubble {

  constructor(x, y) {
    this.rad = 25;
    //this.yLen = 1;
    this.x = x;
    this.y = y;

  }
  // fall() {
  //   if (this.y > height) {
  //     this.y = 0;
  //   }
  //   this.y += this.yLen;
  // }
  show() {
    let r, g, b, c;
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    c = color(r, g, b);
    fill(c);
    ellipse(this.x, this.y, this.rad);
  }
}

let bubbles = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight).parent('sketch-holder');
  cnv.style('display', 'block');

  //cnv.mousePressed(draw);

  background(0);
  bubbles[0] = new Bubble();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let rb = 61,
  gb = 61,
  bb = 61; //random background

function keyPressed() {
  //backaspace for undo
  if (keyCode === BACKSPACE) {
    bubbles.pop();
    bubbles.pop();
    console.log("backspace-undo");
  }
  //c for clear
  if (key === 'c' | key === 'C') {
    bubbles = [];
    console.log("c/C-clear");
  }
  //c for clear
  if (key === 'b' | key === 'B') {
    rb = random(0, 255);
    gb = random(0, 255);
    bb = random(0, 255);
  }
  if (key === 'b' && key === 'f') {
    console.log("b and f");
  }
}

function draw() {
  background(rb, gb, bb);
  for (var i = 0; i < bubbles.length; i++) {
    //bubbles[i].fall();
    bubbles[i].show();
  }
  //stroke(255);
  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    b = new Bubble(mouseX, mouseY);
    bubbles.push(b);
  }

}