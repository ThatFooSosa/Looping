// sketch.js
function setup() {
  createCanvas(500,400)
}

function draw() {
  var x = 50

  background(0)
  fill(250)

  ellipse(x, height/2, 40, 40)
}
function draw() {
  background(0)
  fill(250)

  var x = 50
  var count = 0

  while (count < 8) {
    rect(x, height/2, 40, 40)
    count += 1
    x += 50
  }
}