const Asteroid = require('../lib/asteroid');
const RandomNumber = require('../lib/random_number');

function createAsteroids(){

  var asteroids = [];
  for (var x=0; x<5; x++){
    var newX = new RandomNumber(0, 600).getRandomNumber();
    var newY = new RandomNumber(0, 600).getRandomNumber();

    var newAsteroid = new Asteroid(newX, newY, "gray")
    asteroids.push(newAsteroid)
  };
  return asteroids;
};

module.exports = createAsteroids();
