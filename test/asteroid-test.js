const assert = require('chai').assert;
const Asteroid = require('../lib/asteroid');

describe('Asteroid', function(){
  context('constructor', function(){
    var asteroid = new Asteroid(50, 100);

    it ('assigns an x coordinate', function(){
      assert.equal(asteroid.x, 50)
    });

    it ('assigns a y coordinate', function(){
      assert.equal(asteroid.x, 50)
    });

    it ('assigns a random direction', function(){
      assert.notEqual(asteroid.direction, null)
    });

    it ('assigns a default color gray', function(){
      assert.equal(asteroid.color, "gray")
    });
  });
});

describe('Move', function(){
  it ('moves asteroid', function(){
    var asteroid = new Asteroid(50, 100);
    asteroid.direction = 100;
    var direction = asteroid.direction;

    asteroid.move();
    assert.equal(asteroid.x, 50 + Math.sin(direction));
    assert.equal(asteroid.y, 100 - Math.cos(direction));

    asteroid.move();
    asteroid.move();
    asteroid.move();
    asteroid.move();
    asteroid.move();

    var xDifference = 50 - asteroid.x
    assert.isAtLeast(xDifference, 1);

    var yDifference = 100 - asteroid.y
    assert.isAtLeast(yDifference, 1);
  });
});
