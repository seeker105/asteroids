var canvas = document.getElementById('game');

var largeAsteroidRadius = 20;
var xWarpLeft = canvas.width + largeAsteroidRadius;
var xWarpRight = -largeAsteroidRadius;
var yWarpBottom = canvas.height + largeAsteroidRadius;
var yWarpTop = -largeAsteroidRadius;

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Asteroid(x, y){
  this.x = x;
  this.y = y;
  this.direction = getRandomNumber(0, 360)
};

Asteroid.prototype.draw = function () {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(this.x,this.y,largeAsteroidRadius,0,2*Math.PI);
  context.stroke();
  context.fillStyle = "gray";
  context.fill();
};

Asteroid.prototype.move = function () {
  this.x += Math.sin(this.direction);
  if (this.x > xWarpLeft) this.x = xWarpRight;
  if (this.x < xWarpRight) this.x = xWarpLeft;

  this.y -= Math.cos(this.direction);
  if (this.y > yWarpBottom) this.y = yWarpTop;
  if (this.y < yWarpTop) this.y = yWarpBottom;
};

module.exports = Asteroid;
