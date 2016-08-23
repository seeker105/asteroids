const assert = require('chai').assert;
const Ship = require('../lib/ship');

describe('Ship', function(){
  context('with default attributes', function(){
    var ship = new Ship();

    it ('should assign an x coordinate', function(){
      assert.equal(ship.x, 150);
    });

    it ('should assign a y coordinate', function(){
      assert.equal(ship.y, 150);
    });

    it ('should assign a height', function(){
      assert.equal(ship.height, 10);
    });

    it ('should assign a width', function(){
      assert.equal(ship.width, 10);
    });
  });

  context('with set attributes', function(){
    it('allows attributes to be specified', function(){
      var attributes = {x: 10, y: 10, height: 12, width: 9}
      var ship = new Ship(attributes);
      assert.equal(ship.x, 10);
      assert.equal(ship.y, 10);
      assert.equal(ship.height, 12);
      assert.equal(ship.width, 9);
    });

    it('handles setting only some attributes', function(){
      var attributes = {x: 76, y: 23}
      var ship = new Ship(attributes);
      assert.equal(ship.x, 76);
      assert.equal(ship.y, 23);
    });
  });
});
