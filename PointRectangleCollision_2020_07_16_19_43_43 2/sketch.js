let rx2 = 0;
let ry2 = 0;
let hit = false;
let changableWidth = prompt('What would you like to be the width of the rectangle');
let height = changableWidth / 2;
let rx1 = window.innerWidth / 2 - 1 / 2 * changableWidth;
let ry1 = window.innerHeight / 2 - 1 / 2 * height;

const checkCollisionPointRectangle = (px, py, rx1, ry1, rx2, ry2) => {
  if (px >= rx1 && px <= rx2 && py >= ry1 && py <= ry2) {
    return true;
  } else {
    return false;
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  hit = false;
  background(255);
  point(mouseX, mouseY);
  rect(rx1, ry1, changableWidth, height);
  rx2 = rx1 + changableWidth;
  ry2 = ry1 + height;
  hit = checkCollisionPointRectangle(mouseX, mouseY, rx1, ry1, rx2, ry2);
  stroke( (hit) ? color("red"): 0);
  console.log('Colliding: ' + hit)
}
