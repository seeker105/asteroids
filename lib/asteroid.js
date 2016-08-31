var canvas = document.getElementById('game');
const RandomNumber = require('../lib/random_number');

var largeAsteroidRadius = 20;
var xWarpLeft = 600 + largeAsteroidRadius;
var xWarpRight = -largeAsteroidRadius;
var yWarpBottom = 600 + largeAsteroidRadius;
var yWarpTop = -largeAsteroidRadius;

function Asteroid(x, y, color='gray'){
  this.x = x;
  this.y = y;
  this.direction = new RandomNumber(0, 360).getRandomNumber();
  this.color = color;
};

Asteroid.prototype.draw = function () {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(this.x,this.y,largeAsteroidRadius,0,2*Math.PI);
  context.stroke();
  context.fillStyle = this.color;
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

Asteroid.prototype.explode = function () {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(this.x,this.y,40,0,2*Math.PI);
  context.fillStyle = "rgba(100, 0, 0, 0.3)";
  context.fill();
}

module.exports = Asteroid;
