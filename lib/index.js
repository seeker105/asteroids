const Ship = require('../lib/ship');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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
