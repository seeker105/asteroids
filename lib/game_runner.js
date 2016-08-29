const asteroids = require('../lib/asteroids');
const Render = require('../lib/render');
const Projectile = require('../lib/projectile')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var render = new Render();

function GameRunner(ship){
  this.ship = ship;
}

var img = new Image();
img.src = 'assets/images/nebula.png';

GameRunner.prototype.gameOver = function(ship) {
  ship.x = 1000;
  ship.y = 1000;
  render.renderGameOver();
};

GameRunner.prototype.playGame = function (ship){
  render.renderPlayGame();
  render.renderShip(ship);
  asteroids.forEach(function(asteroid, x, asteroidsArray){
    asteroid.move();
    asteroid.draw();
  });
}

GameRunner.prototype.shoot = function(projectile, ship){
  // projectile = new Projectile(ship);
  // projectile.draw();
  projectile.draw();
  projectile.move(ship);
}

// GameRunner.prototype.shooting = function(projectile){
//   if (projectile.x > 600 || projectile.x < 0 || projectile.y > 600 || projectile.y < 0) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }

module.exports = GameRunner;
