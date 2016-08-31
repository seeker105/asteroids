const $ = require('jquery');
const asteroids = require('../lib/asteroids');
const Render = require('../lib/render');
const Sound = require('../lib/sound');
const AsteroidHelper = require('../lib/asteroid_helper');

var canvas = document.getElementById('game');
var scoreBoard = document.getElementById('scoreBoard')
var context = canvas.getContext('2d');
var render = new Render();
var showLifeCount = false;
var hits = [];
var asteroidHelper = new AsteroidHelper();
var myStorage = localStorage;
if (!myStorage.scoreList) myStorage.scoreList = '[0,0,0,0,0,0,0,0,0,0]';

function GameRunner(ship, level=1) {
  this.ship = ship;
  this.level = level;
  this.score = 0;
  this.gameFinalized = false;
  this.displayScores();
}

var img = new Image();
img.src = 'assets/images/nebula.png';

GameRunner.prototype.gameOver = function(ship) {
  ship.x = 1000;
  ship.y = 1000;
  if (!this.gameFinalized) {
    this.gameFinalized = true;
    this.updateScoreList();
    this.displayScores();
  }
  render.renderGameOver();
  render.renderScore(this.score);
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
  render.renderScore(this.score);
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

GameRunner.prototype.scoreHit = function () {
  this.score += 10;
};

GameRunner.prototype.updateScoreList = function () {
  var scores = $.parseJSON(myStorage.scoreList);
  newScores = insertScore(scores, this.score)
  myStorage.scoreList = JSON.stringify(newScores);
};

GameRunner.prototype.displayScores = function () {
  scores = $.parseJSON(myStorage.scoreList);
  var result = 'Scores:<br /><ol type="1">'
  scores.forEach(function(score){
    if (score > 0) {
      result = result + '<li>' + score + '</li>'
    }
  });
  scoreBoard.innerHTML = result;
  return;
};

function insertScore(scores, score){
  var scoreNotAdded = true;
  var equalScore = false;
  scores.forEach(function(recordedScore, x, scoreArray){
    if (score === recordedScore) equalScore = true;
    if (!equalScore && scoreNotAdded && typeof score === "number" && score > recordedScore) {
      scoreNotAdded = false;
      scoreArray.splice(x, 0, score);
      scoreArray.pop();
    }
    var k = 2;
  });
  return scores;
}


module.exports = GameRunner;
