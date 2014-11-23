// requestAnimationFrame shim
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// variables for first square

var radius1 = 20;
var width1 = 40;
var height1 = 40;
var x1 = 90;
var y1 = 90;
var newX1 = 90;
var newY1 = 90;
var angle1 = 0;
var newRadius1;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw first square
  context.save();
  context.beginPath();
  context.translate(x1,y1);
  context.rotate(angle1 * Math.PI/180)
  context.rect(-width1/2, -height1/2, radius1 * 2, radius1 * 2);
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
};

// functions for square1

// selects random coords for square 1
function selectRandCoords1() {
  newX1 = Math.round((Math.random()*(350)+30)/10)*10;
  newY1 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 1
function plotCourse1() {
  if (x1 < newX1) {
    x1 += 1;
  };
  if (y1 < newY1) {
    y1 += 1;
  };
  if (x1 > newX1) {
    x1 -= 1;
  };
  if (y1 > newY1) {
    y1 -= 1;
  };
};

function spin1() {
  if (x1 != newX1) {
  angle1 += 3;
  };
};

function resetRadius1() {
  newRadius1 = Math.floor((Math.random() * 50) + 15);
};

function animate1() {
  requestAnimFrame(animate1);
  draw();
  plotCourse1();
  spin1();
};

