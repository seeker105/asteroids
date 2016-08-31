const asteroids = require('../lib/asteroids');
const Render = require('../lib/render');

var canvas = document.getElementById('game');
var scoreBoard = document.getElementById('scoreBoard')
var context = canvas.getContext('2d');
var render = new Render();
var showLifeCount = false;
var myStorage = localStorage;
if (!myStorage.scoreList) myStorage.scoreList = '[0,0,0,0,0,0,0,0,0,0]';

function GameRunner(ship){
  this.ship = ship;
  this.score = 0;
  this.displayScores();
  myStorage.scoreList = '[0,0,0,0,0,0,0,0,0,0]';
}

var img = new Image();
img.src = 'assets/images/nebula.png';

GameRunner.prototype.gameOver = function(ship) {
  ship.x = 1000;
  ship.y = 1000;
  this.updateScoreList();
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
}

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
    // if (score > 0) {
      result = result + '<li>' + score + '</li>'
    // }
  });
  scoreBoard.innerHTML = result;
  return;
};

function insertScore(scores, score){
  scores.forEach(function(score, x, scoreArray){
    if (typeof score === "number" && this.score > score) {
      scoreArray.splice(x, 0, score);
      scoreArray.pop();
      return scoreArray;
    }
  });
  return scores;
}


module.exports = GameRunner;
