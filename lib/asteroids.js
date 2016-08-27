const Asteroid = require('../lib/asteroid');
const RandomNumber = require('../lib/random_number');

var canvas = document.getElementById('game');

function createAsteroids(){

  var asteroids = [];
  for (var x=0; x<5; x++){
    var newX = new RandomNumber(0, canvas.width).getRandomNumber();
    var newY = new RandomNumber(0, canvas.height).getRandomNumber();

    var newAsteroid = new Asteroid(newX, newY, "gray")
    asteroids.push(newAsteroid)
  };
  return asteroids;
};

module.exports = createAsteroids();
