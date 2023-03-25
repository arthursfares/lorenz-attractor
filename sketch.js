let x = 4.1; let y = 0.4; let z = 4.5;

let x2 = 3.1; let y2 = 0.1; let z2 = 6.1

let sigma = 10.0;
let rho = 28.0;
let beta = 8.0 / 3.0;

let points = new Array()
let points2 = new Array();

function setup() {
  createCanvas(windowWidth, windowHeight, 'webgl');
  setAttributes('antialias', true);
  colorMode('hsb');

  createEasyCam();
  // suppress right click context menu
  document.oncontextmenu = function() { return false; }
}

function calculate_change(x, y, z) {
  let dt = 0.01;

  let dx = ( sigma*(y - x) ) * dt;
  let dy = ( x*(rho - z) - y ) * dt;
  let dz = ( x*y - beta*z ) * dt;
  
  return {"dx": dx, "dy": dy, "dz": dz};
}

function draw() {
  background(0);


  changes = calculate_change(x, y, z);
  x += changes.dx; y += changes.dy; z += changes.dz;
  
  changes2 = calculate_change(x2, y2, z2);
  x2 += changes2.dx; y2 += changes2.dy; z2 += changes2.dz;

  points.push([x, y, z])
  points2.push([x2, y2, z2])

  draw_full_shape(points, "blue", "cyan");
  draw_full_shape(points2, "red", "orange");

  // draw_pair(points[0], points[points.length-1]);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw_full_shape(points, color, placeholder_color) {
  push();
  scale(4);
  noFill();
  beginShape();
  points.forEach((p) => {
    // for each point, a vertex is drawn
    stroke(color);
    vertex(p[0], p[1], p[2]);
    if (p == points.slice(-1)[0]) {
      // for the last point added to list, a placeholder is also drawn
      push();
      strokeWeight(13);
      stroke(placeholder_color);
      point(p[0], p[1], p[2]);
      pop();
    }
  });
  endShape();
  pop();
}

function draw_pair() {
  draw_sphere(points[0], 6, "yellow", 2);
  draw_sphere(points[points.length-1], 6, "pink", 2);
  if (points.length > 69) { points.shift(); } 
}

function draw_sphere(position, radius, color, scale_factor) {
  push();
  scale(scale_factor); 
  stroke(color); fill(color);
  translate(position[0],position[1],position[2]);
  sphere(radius)
  pop();
}