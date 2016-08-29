const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');
const GameRunner = require('../lib/game_runner')
const Projectile = require('../lib/projectile')
const bulletCollisionDetection = require('../lib/bullet-collision')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

var gameActive = true;
// var shooting = false;
var game = new GameRunner(canvas, ship);
var projectile = new Projectile(ship);
// var projectile = null;

requestAnimationFrame(function gameLoop() {
  if (collisionDetection(ship, asteroids)) {
    gameActive = false;
  }

  if (gameActive) {
    game.playGame(ship, projectile);
  } else {
    game.gameOver(ship);
  }

  // if (projectile !== null) {
  //   game.projectile();
  // }

  // if (bulletCollisionDetection(projectile, asteroids)) {
  //   console.log("collision detected");
  // }

  requestAnimationFrame(gameLoop);
});


document.addEventListener('keydown', function (event) {
  switch(event.keyCode)
   {
    case 32:
    event.preventDefault();
    game.shoot(projectile, ship);
    // shooting = true;
    break;

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
