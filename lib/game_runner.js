const asteroids = require('../lib/asteroids');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function gameRunner(ship){
  this.ship = ship;
}

var img = new Image();
img.src = 'assets/images/nebula.png';

gameRunner.prototype.gameOver = function(ship) {
  ship.x = 1000;
  ship.y = 1000;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  context.fillStyle = "red";
  context.textAlign = "center";
  context.font = "30px Arial";
  context.fillText("Game Over",canvas.width/2,canvas.height/2);
};

gameRunner.prototype.playGame = function (ship){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  ship.draw(context);
  asteroids.forEach(function(asteroid, x, asteroidsArray){
    asteroid.move();
    asteroid.draw();
  });
}

module.exports = gameRunner;
