const assert = require('chai').assert;
const asteroids = require('../lib/asteroids');
const Asteroid = require('../lib/asteroid');
const RandomNumber = require('../lib/random_number');

describe('asteroids', function(){
  it('creates asteroids', function(){
    assert.equal(asteroids.length, 5)
  });
});
