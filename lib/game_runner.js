const asteroids = require('../lib/asteroids');
const Render = require('../lib/render');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var render = new Render();
var showLifeCount = false;

function GameRunner(ship){
  this.ship = ship;
}

function Sound(){
  this.sound = document.createElement("audio");
  this.sound.src = 'assets/sounds/explosion_x.wav';
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
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
  setTimeout(function(){showLifeCount = false;}, 3000)
};

GameRunner.prototype.playGame = function (ship, lifeCount, projectiles){
  render.renderPlayGame();
  render.renderShip(ship);
  if (showLifeCount) {
    render.lifeCount(lifeCount)
  }
  projectiles.forEach(function(bullet, x, projectileArray){
    bullet.move();
    bullet.draw();
  });
  asteroids.forEach(function(asteroid, x, asteroidsArray){
    asteroid.move();
    asteroid.draw();
  });
};

GameRunner.prototype.explodeAsteroid = function (hitAsteroid) {
  asteroids.splice((asteroids.indexOf(hitAsteroid)), 1);
  var sound = new Sound();
  sound.play();
};

module.exports = GameRunner;
