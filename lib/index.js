const Ship = require('../lib/ship');
const $ = require('jquery')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship(150, 150, 10, 10);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ship.draw();
  requestAnimationFrame(gameLoop)
});

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  context.fillStyle = "orange";
  return this;
};

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
