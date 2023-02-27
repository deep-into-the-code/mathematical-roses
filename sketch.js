let a = 50;
let speed = 2e-2; // 0.02

let t = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB);
}

function draw() {
  background(10);

  translate(width / 4, 0)
  for (let n = 1; n <= 7; n++) {
    for (let d = 1; d <= 7; d++) {

      push();
      translate((a * 2.5) * n, ((a - 1) * 2.5) * d)
      rose(n, d);

      let k = n / d;

      let x = a * cos(k * t) * cos(t);
      let y = a * cos(k * t) * sin(t);

      noStroke()
      fill(map(n * d, 1, 49, 0, 255), 255, 255);
      circle(x, y, 10)

      pop();
    }
  }

  t += speed *2;

}

let rose = (n, d) => {

  noFill();
  beginShape();
  for (let angle = 0; angle < TWO_PI * d; angle += speed * 3) {
    let k = n / d;


    let x = a * cos(k * angle) * cos(angle);
    let y = a * cos(k * angle) * sin(angle);

    stroke(map(n * d, 1, 49, 0, 255), 255, 255);
    vertex(x, y);

  }
  endShape();
}
