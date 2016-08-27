const $ = require('jquery')
const Ship = require('../lib/ship');
const collisionDetection = require('../lib/collisions');
const asteroids = require('../lib/asteroids');
const gameRunner = require('../lib/game_runner')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ship = new Ship();

// var img = new Image();
// img.src = 'assets/images/nebula.png';

var gameActive = true;
var game = new gameRunner(canvas, ship);

requestAnimationFrame(function gameLoop() {
  if (collisionDetection(ship, asteroids)) {
    gameActive = false;
  }
  // gameRunner
  if (gameActive) {
    game.playGame(ship);
  } else {
    game.gameOver(ship);
  }
  requestAnimationFrame(gameLoop);
});


// function gameOver(){
//   ship.x = 1000;
//   ship.y = 1000;
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.drawImage(img, 0, 0, 600, 600);
//   context.fillStyle = "red";
//   context.textAlign = "center";
//   context.font = "30px Arial";
//   context.fillText("Game Over",canvas.width/2,canvas.height/2);
// }
//
// function playGame (){
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.drawImage(img, 0, 0, 600, 600);
//   ship.draw();
//   asteroids.forEach(function(asteroid, x, asteroidsArray){
//     asteroid.move();
//     asteroid.draw();
//   });
// }

document.addEventListener('keydown', function (event) {
  console.log(ship.x, ship.y);
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
