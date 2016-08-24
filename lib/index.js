const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

var img = new Image();
img.src = 'assets/images/nebula.png';

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  ship.draw();
  asteroids.forEach(function(asteroid, x, asteroidsArray){
    asteroid.move();
    asteroid.draw();
  });
  collisionDetection(ship, asteroids);
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

    case 40:
    event.preventDefault();
    break;
  }
});
