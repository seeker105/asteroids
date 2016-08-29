const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');
const GameRunner = require('../lib/game_runner')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

var gameActive = true;

var shipMoving = false;
var rotatingRight = false;
var rotatingLeft = false;

var lifeCount = 3;
var game = new GameRunner(canvas, ship);

requestAnimationFrame(function gameLoop() {
  if (collisionDetection(ship, asteroids)) {
    if (lifeCount > 1) {
      lifeCount--;
      game.nextLife(ship);
      game.displayLifeCount();
    } else {
      gameActive = false;
    }
  }
  if (gameActive) {
    if (shipMoving) {
      ship.move();
    }
    if (rotatingRight) {
      ship.rotateRight();
    }
    if (rotatingLeft) {
      ship.rotateLeft();
    }

    game.playGame(ship, lifeCount);

  } else {
    game.gameOver(ship);
  }
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function (event) {
  switch(event.keyCode)
  {
    case 38:
    event.preventDefault();
    shipMoving = true;
    break;

    case 37:
    event.preventDefault();
    rotatingLeft = true;
    break;

    case 39:
    event.preventDefault();
    rotatingRight = true;
    break;

    case 40:
    event.preventDefault();
    break;
  }
});

document.addEventListener('keyup', function(event){
  switch (event.keyCode) {
    case 38:
      shipMoving = false;
      break;

    case 37:
      rotatingLeft = false;
      break;

    case 39:
      rotatingRight = false;
      break;
  }
});
