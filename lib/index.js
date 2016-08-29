const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');
const GameRunner = require('../lib/game_runner')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

var gameActive = true;
var lifeCount = 3;
var game = new GameRunner(canvas, ship);

requestAnimationFrame(function gameLoop() {
  if (collisionDetection(ship, asteroids)) {
    if (lifeCount > 1) {
      lifeCount--;
      game.nextLife(ship);
    } else {
      gameActive = false;
    }
  }
  if (gameActive) {
    game.playGame(ship);
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
