const $ = require('jquery');
const asteroids = require('../lib/asteroids');
const Render = require('../lib/render');
const Sound = require('../lib/sound');
const AsteroidHelper = require('../lib/asteroid_helper');

var canvas = document.getElementById('game');
var render = new Render();
var showLifeCount = false;
var hits = [];
var asteroidHelper = new AsteroidHelper();

function GameRunner(ship, level=1) {
  this.ship = ship;
  this.level = level;
}

var img = new Image();
img.src = 'assets/images/nebula.png';

GameRunner.prototype.gameOver = function(ship) {
  ship.x = 1000;
  ship.y = 1000;
  render.renderGameOver();
};

GameRunner.prototype.editArray = function (newArray) {
    newArray.pop();
};

GameRunner.prototype.nextLife = function (ship) {
  ship.x = canvas.width/2;
  ship.y = canvas.height/2;
  ship.angle = 0;
};

GameRunner.prototype.displayLifeCount = function () {
  showLifeCount = true;
  setTimeout(function(){showLifeCount = false;}, 3000);
};

GameRunner.prototype.playGame = function (ship, lifeCount, projectiles){
  render.renderPlayGame();
  render.renderShip(ship);
  if (showLifeCount) {render.lifeCount(lifeCount);}
  if (hits) {render.renderExplosions(hits);}

  projectiles.forEach(function(bullet, x, projectileArray){
    bullet.move();
    bullet.draw();
    bullet.edgeCheck(x, projectileArray);
  });
  asteroids.forEach(function(asteroid){
    asteroid.move();
    asteroid.draw();
  });
  if (asteroids.length === 0) {
    this.newLevel(ship, lifeCount, projectiles);
  }
};

GameRunner.prototype.newLevel = function (ship, lifeCount, projectiles) {
  var level = this.level += 1;
  $(".level").html("Level "+ level)
  // render.renderNewLevel(this.level);
  asteroidHelper.addAsteroids(8, asteroids);
  this.playGame(ship, lifeCount, projectiles);
};

GameRunner.prototype.explodeAsteroid = function (hitAsteroid) {
  hits.push(hitAsteroid);
  var sound = new Sound();
  sound.play();
  setTimeout(function(){hits = [];}, 500);
  asteroids.splice((asteroids.indexOf(hitAsteroid)), 1);
};

module.exports = GameRunner;
