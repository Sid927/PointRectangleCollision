let rx1 = 300;
let ry1 = 400;
let rx2 = 0;
let ry2 = 0;
let hit = false;

const checkCollisionPointRectangle = (px, py, rx1, ry1, rx2, ry2) => {
  if (px >= rx1 && px <= rx2 && py >= ry1 && py <= ry2) {
    return true;
  } else {
    return false;
  }
}

function setup() {
  createCanvas(750, 750);
}

function draw() {
  hit = false;
  background(255);
  point(mouseX, mouseY);
  rect(rx1, ry1, 300, 150);
  rx2 = rx1 + 300;
  ry2 = ry1 + 150;
  hit = checkCollisionPointRectangle(mouseX, mouseY, rx1, ry1, rx2, ry2);
  stroke( (hit) ? color("red"): 0);
  console.log('Colliding: ' + hit)
}