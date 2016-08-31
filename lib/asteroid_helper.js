const Asteroid = require('../lib/asteroid');
const RandomNumber = require('../lib/random_number');

function AsteroidHelper(){
}

AsteroidHelper.prototype.addAsteroids = function(num, array) {
  for (var x=0; x < num; x++){
    var newX = new RandomNumber(0, 600).getRandomNumber();
    var newY = new RandomNumber(0, 600).getRandomNumber();

    var newAsteroid = new Asteroid(newX, newY, "gray");
    array.push(newAsteroid);
  }
  return array;
};

module.exports = AsteroidHelper;
