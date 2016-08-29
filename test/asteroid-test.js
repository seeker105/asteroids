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
    asteroid.move();
    assert.notEqual(asteroid.x, 50);
    assert.notEqual(asteroid.x, 100)
  });
});
