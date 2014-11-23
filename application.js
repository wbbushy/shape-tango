$(document).ready(bindEvents);

  function bindEvents() {
    $('#tango').click(runItMaster);
  };

  function runItMaster() {
    runIt1();
    runIt2();
    runIt3();
    runIt4();
    runIt5();
    runIt6();
  }

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




// draw function
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw first square
  context.save();
  context.beginPath();
  context.translate(x1,y1);
  context.rotate(angle1 * Math.PI/180)
  context.rect(-width1/2, -height1/2, radius1 * 2, radius1 * 2);
  context.globalAlpha = opacity1;
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
  // draw second square
  context.save();
  context.beginPath();
  context.translate(x2,y2);
  context.rotate(angle2 * Math.PI/180)
  context.rect(-width2/2, -height2/2, radius2 * 2, radius2 * 2);
  context.globalAlpha = opacity2;
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
  // draw third square
  context.save();
  context.beginPath();
  context.translate(x3,y3);
  context.rotate(angle3 * Math.PI/180)
  context.rect(-width3/2, -height3/2, radius3 * 2, radius3 * 2);
  context.globalAlpha = opacity3;
  context.fillStyle = 'blue';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
  // draw fourth square
  context.save();
  context.beginPath();
  context.translate(x4,y4);
  context.rotate(angle4 * Math.PI/180)
  context.rect(-width4/2, -height4/2, radius4 * 2, radius4 * 2);
  context.globalAlpha = opacity3;
  context.fillStyle = 'purple';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
  // draw fifth square
  context.save();
  context.beginPath();
  context.translate(x5,y5);
  context.rotate(angle5 * Math.PI/180)
  context.rect(-width5/2, -height5/2, radius5 * 2, radius5 * 2);
  context.globalAlpha = opacity5;
  context.fillStyle = 'red';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
  // draw sixth square
  context.save();
  context.beginPath();
  context.translate(x6,y6);
  context.rotate(angle6 * Math.PI/180)
  context.rect(-width6/2, -height6/2, radius6 * 2, radius6 * 2);
  context.globalAlpha = opacity6;
  context.fillStyle = 'orange';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  context.restore();
};

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
var opacity1 = 1;
var newOpacity1;

// functions for first square

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

function resize1() {
  if (radius1 < newRadius1) {
    radius1 += 1;
  };
  if (radius1 > newRadius1) {
    radius1 -= 1;
  };
};

function determineOpacity1() {
  newOpacity1 = (newRadius1 - 15) / 50;
};

function fade1() {
  if (opacity1 > newOpacity1) {
    opacity1 -= 0.01;
  };
  if (newOpacity1 > opacity1) {
    opacity1 += 0.01;
  };
};

function animate1() {
  requestAnimFrame(animate1);
  draw();
  plotCourse1();
  spin1();
  resize1();
  fade1();
};

function runIt1() {
  selectRandCoords1();
  resetRadius1();
  determineOpacity1();
  animate1();
}

// variables for second square

var radius2 = 20;
var width2 = 40;
var height2 = 40;
var x2 = 90;
var y2 = 90;
var newX2 = 90;
var newY2 = 90;
var angle2 = 0;
var newRadius2;
var opacity2 = 1;
var newOpacity2;

// functions for second square

// selects random coords for square 2
function selectRandCoords2() {
  newX2 = Math.round((Math.random()*(350)+30)/10)*10;
  newY2 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 1
function plotCourse2() {
  if (x2 < newX2) {
    x2 += 1;
  };
  if (y2 < newY2) {
    y2 += 1;
  };
  if (x2 > newX2) {
    x2 -= 1;
  };
  if (y2 > newY2) {
    y2 -= 1;
  };
};

function spin2() {
  if (x2 != newX2) {
  angle2 += 3;
  };
};

function resetRadius2() {
  newRadius2 = Math.floor((Math.random() * 50) + 15);
};

function resize2() {
  if (radius2 < newRadius2) {
    radius2 += 1;
  };
  if (radius2 > newRadius2) {
    radius2 -= 1;
  };
};

function determineOpacity2() {
  newOpacity2 = (newRadius2 - 15) / 50;
};

function fade2() {
  if (opacity2 > newOpacity2) {
    opacity2 -= 0.01;
  };
  if (newOpacity2 > opacity2) {
    opacity2 += 0.01;
  };
};

function animate2() {
  requestAnimFrame(animate2);
  draw();
  plotCourse2();
  spin2();
  resize2();
  fade2();
};

function runIt2() {
  selectRandCoords2();
  resetRadius2();
  determineOpacity2();
  animate2();
}

// variables for third square

var radius3 = 20;
var width3 = 40;
var height3 = 40;
var x3 = 90;
var y3 = 90;
var newX3 = 90;
var newY3 = 90;
var angle3 = 0;
var newRadius3;
var opacity3 = 1;
var newOpacity3;

// functions for third square

// selects random coords for square 3
function selectRandCoords3() {
  newX3 = Math.round((Math.random()*(350)+30)/10)*10;
  newY3 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 1
function plotCourse3() {
  if (x3 < newX3) {
    x3 += 1;
  };
  if (y3 < newY3) {
    y3 += 1;
  };
  if (x3 > newX3) {
    x3 -= 1;
  };
  if (y3 > newY3) {
    y3 -= 1;
  };
};

function spin3() {
  if (x3 != newX3) {
  angle3 += 3;
  };
};

function resetRadius3() {
  newRadius3 = Math.floor((Math.random() * 50) + 15);
};

function resize3() {
  if (radius3 < newRadius3) {
    radius3 += 1;
  };
  if (radius3 > newRadius3) {
    radius3 -= 1;
  };
};

function determineOpacity3() {
  newOpacity3 = (newRadius3 - 15) / 50;
};

function fade3() {
  if (opacity3 > newOpacity3) {
    opacity3 -= 0.01;
  };
  if (newOpacity3 > opacity3) {
    opacity3 += 0.01;
  };
};

function animate3() {
  requestAnimFrame(animate3);
  draw();
  plotCourse3();
  spin3();
  resize3();
  fade3();
};

function runIt3() {
  selectRandCoords3();
  resetRadius3();
  determineOpacity3();
  animate3();
}

// variables for fourth square

var radius4 = 20;
var width4 = 40;
var height4 = 40;
var x4 = 90;
var y4 = 90;
var newX4 = 90;
var newY4 = 90;
var angle4 = 0;
var newRadius4;
var opacity4 = 1;
var newOpacity4;

// functions for square 4

// selects random coords for square 4
function selectRandCoords4() {
  newX4 = Math.round((Math.random()*(350)+30)/10)*10;
  newY4 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 4
function plotCourse4() {
  if (x4 < newX4) {
    x4 += 1;
  };
  if (y4 < newY4) {
    y4 += 1;
  };
  if (x4 > newX4) {
    x4 -= 1;
  };
  if (y4 > newY4) {
    y4 -= 1;
  };
};

function spin4() {
  if (x4 != newX4) {
  angle4 += 3;
  };
};

function resetRadius4() {
  newRadius4 = Math.floor((Math.random() * 50) + 15);
};

function resize4() {
  if (radius4 < newRadius4) {
    radius4 += 1;
  };
  if (radius4 > newRadius4) {
    radius4 -= 1;
  };
};

function determineOpacity4() {
  newOpacity4 = (newRadius4 - 15) / 50;
};

function fade4() {
  if (opacity4 > newOpacity4) {
    opacity4 -= 0.01;
  };
  if (newOpacity4 > opacity4) {
    opacity4 += 0.01;
  };
};

function animate4() {
  requestAnimFrame(animate4);
  draw();
  plotCourse4();
  spin4();
  resize4();
  fade4();
};

function runIt4() {
  selectRandCoords4();
  resetRadius4();
  determineOpacity4();
  animate4();
}

// variables for fifth square

var radius5 = 20;
var width5 = 40;
var height5 = 40;
var x5 = 90;
var y5 = 90;
var newX5 = 90;
var newY5 = 90;
var angle5 = 0;
var newRadius5;
var opacity5 = 1;
var newOpacity5;

// functions for fifth square

// selects random coords for square 5
function selectRandCoords5() {
  newX5 = Math.round((Math.random()*(350)+30)/10)*10;
  newY5 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 5
function plotCourse5() {
  if (x5 < newX5) {
    x5 += 1;
  };
  if (y5 < newY5) {
    y5 += 1;
  };
  if (x5 > newX5) {
    x5 -= 1;
  };
  if (y5 > newY5) {
    y5 -= 1;
  };
};

function spin5() {
  if (x5 != newX5) {
  angle5 += 3;
  };
};

function resetRadius5() {
  newRadius5 = Math.floor((Math.random() * 50) + 15);
};

function resize5() {
  if (radius5 < newRadius5) {
    radius5 += 1;
  };
  if (radius5 > newRadius5) {
    radius5 -= 1;
  };
};

function determineOpacity5() {
  newOpacity5 = (newRadius5 - 15) / 50;
};

function fade5() {
  if (opacity5 > newOpacity5) {
    opacity5 -= 0.01;
  };
  if (newOpacity5 > opacity5) {
    opacity5 += 0.01;
  };
};

function animate5() {
  requestAnimFrame(animate5);
  draw();
  plotCourse5();
  spin5();
  resize5();
  fade5();
};

function runIt5() {
  selectRandCoords5();
  resetRadius5();
  determineOpacity5();
  animate5();
}

// variables for sixth square

var radius6 = 20;
var width6 = 40;
var height6 = 40;
var x6 = 90;
var y6 = 90;
var newX6 = 90;
var newY6 = 90;
var angle6 = 0;
var newRadius6;
var opacity6 = 1;
var newOpacity6;

// functions for sixth sqaure

// selects random coords for square 6
function selectRandCoords6() {
  newX6 = Math.round((Math.random()*(350)+30)/10)*10;
  newY6 = Math.round((Math.random()*(350)+30)/10)*10;
};

// moves square to selected randoms coords for square 1
function plotCourse6() {
  if (x6 < newX6) {
    x6 += 1;
  };
  if (y6 < newY6) {
    y6 += 1;
  };
  if (x6 > newX6) {
    x6 -= 1;
  };
  if (y6 > newY6) {
    y6 -= 1;
  };
};

function spin6() {
  if (x6 != newX6) {
  angle6 += 3;
  };
};

function resetRadius6() {
  newRadius6 = Math.floor((Math.random() * 50) + 15);
};

function resize6() {
  if (radius6 < newRadius6) {
    radius6 += 1;
  };
  if (radius6 > newRadius6) {
    radius6 -= 1;
  };
};

function determineOpacity6() {
  newOpacity6 = (newRadius6 - 15) / 50;
};

function fade6() {
  if (opacity6 > newOpacity6) {
    opacity6 -= 0.01;
  };
  if (newOpacity6 > opacity6) {
    opacity6 += 0.01;
  };
};

function animate6() {
  requestAnimFrame(animate6);
  draw();
  plotCourse6();
  spin6();
  resize6();
  fade6();
};

function runIt6() {
  selectRandCoords6();
  resetRadius6();
  determineOpacity6();
  animate6();
}

