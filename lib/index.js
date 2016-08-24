const $ = require('jquery')
const Ship = require('../lib/ship');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

// create Asteroids
var asteroids = [];
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
  context.arc(this.x,this.y,20,0,2*Math.PI);
  context.stroke();
};

var img = new Image();
img.src = 'assets/images/nebula.png';

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  ship.draw();
  asteroids.forEach(function(asteroid, x, asteroidsArray){
    asteroid.draw();
  });
  requestAnimationFrame(gameLoop)
});


document.addEventListener('keydown', function (event) {
  console.log(ship.x, ship.y);
  switch(event.keyCode)
  {
    case 38:
    event.preventDefault();
    ship.move();
    break;

    case 37:
    event.preventDefault();
    ship.rotateLeft();
    break;

    case 39:
    event.preventDefault();
    ship.rotateRight();
    break;
  }
});
