const Asteroid = require('../lib/asteroid');
var canvas = document.getElementById('game');


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function createAsteroids(){
  var asteroids = [];
  for (var x=0; x<5; x++){
    var newX = getRandomNumber(0, canvas.width)
    var newY = getRandomNumber(0, canvas.height)
    var newAsteroid = new Asteroid(newX, newY, "gray")
    asteroids.push(newAsteroid)
  };
  return asteroids;
};

module.exports = createAsteroids();
