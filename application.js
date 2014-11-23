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

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw first square
  context.save();
  context.beginPath();
  context.rect(-width1/2, -height1/2, radius1 * 2, radius1 * 2);
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
};

function animate1() {
  requestAnimFrame(animate1);
  draw();
};
