const assert = require('chai').assert;
const collisionDetection = require('../lib/collisions');
const Ship = require('../lib/ship');

describe('collisionDetection', function(){
  context('with one asteroid', function(){
    var ship = new Ship();

    it ('should locate ship x coordinates', function(){
      assert.equal(ship.x, 0);
    });

  });
});
