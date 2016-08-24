const assert = require('chai').assert;
const collisionDetection = require('../lib/collisions');
const Ship = require('../lib/ship');

describe('collisionDetection', function(){
  context('with no overlap', function(){
    var ship = new Ship({x: 200, y: 200});
    var asteroid_1 = {x: 10, y: 15, direction: 25};
    var asteroid_2 = {x: 50, y: 50, direction: 250};
    var asteroids = [asteroid_1, asteroid_2];
    var result = collisionDetection(ship, asteroids);

    it ('should return false', function(){
      assert.equal(result, false);
    });
  });

  context('with overlap', function(){
    var ship = new Ship({x: 200, y: 15});
    var asteroid_1 = {x: 200, y: 15, direction: 25};
    var asteroids = [asteroid_1];
    var result = collisionDetection(ship, asteroids);

    it ('should return true', function(){
      assert.equal(result, true);
    });
  });
});
