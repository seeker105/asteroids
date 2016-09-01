const assert = require('chai').assert;
const AsteroidHelper = require('../lib/asteroid_helper');

describe('add asteroids', function () {
  it('adds asteroids to empty asteroids array', function() {
    var asteroids = [];
    new AsteroidHelper().addAsteroids(6, asteroids);

    assert.equal(asteroids.length, 6);
 });
});
