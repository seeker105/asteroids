const $ = require('jquery')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var asteroids = [];

// create Asteroids
for (var x=0; x<4; x++){
  var newX = getRandomNumber(0, canvas.width)
  var newY = getRandomNumber(0, canvas.height)
  var newAsteroid = new Asteroid(newX, newY)
  asteroids.push(newAsteroid)
};

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Asteroid(x, y){
  this.x = x;
  this.y = y;
  this.direction = getRandomNumber(0, 360)
};

Asteroid.prototype.draw = function () {
  context.beginPath();
  context.arc(100,125,20,0,2*Math.PI);
  context.stroke();
};

function Ship(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  context.fillStyle = "orange";
  return this;
};

Ship.prototype.moveUp = function () {
  if (this.y > 0) {
      this.y-=5;
    }
  return this;
};

Ship.prototype.moveDown = function () {
  if (this.y < canvas.height - 10) {
      this.y+=5;
     }
  return this;
};

Ship.prototype.moveLeft = function () {
  if (this.x > 0) {
      this.x-=5;
     }
  return this;
};

Ship.prototype.moveRight = function () {
  if (this.x < canvas.width - 10) {
      this.x+=5;
     }
  return this;
};

var ship = new Ship(150, 150, 10, 10);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ship.draw();
  debugger;
  asteroids.forEach(function(asteroid){
    asteroid.draw;
  });
  requestAnimationFrame(gameLoop)
});



document.addEventListener('keydown', function (event) {
  console.log('moving ship!');
  switch(event.keyCode)
  {
    case 38:
    ship.moveUp();
    break;

    case 40:
    ship.moveDown();
    break;

    case 37:
    ship.moveLeft();
    break;

    case 39:
    ship.moveRight();
    break;
  }
});
