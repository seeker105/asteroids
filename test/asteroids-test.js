const assert = require('chai').assert;
const asteroids = require('../lib/asteroids');

describe('asteroids', function(){
  it('creates asteroids', function(){
    assert.equal(asteroids.length, 5);
  });
});
