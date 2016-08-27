const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');
const gameRunner = require('../lib/game_runner')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

var gameActive = true;
var game = new gameRunner(canvas, ship);

requestAnimationFrame(function gameLoop() {
  if (collisionDetection(ship, asteroids)) {
    gameActive = false;
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
