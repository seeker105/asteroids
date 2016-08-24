const assert = require('chai').assert;
const Ship = require('../lib/ship');

describe('Ship', function(){
  context('with default attributes', function(){
    var ship = new Ship();

    it ('should assign an x coordinate', function(){
      assert.equal(ship.x, 0);
    });

    it ('should assign a y coordinate', function(){
      assert.equal(ship.y, 0);
    });

    it ('should assign a height', function(){
      assert.equal(ship.height, 30);
    });

    it ('should assign a width', function(){
      assert.equal(ship.width, 30);
    });

    it ('should assign an angle', function(){
      assert.equal(ship.angle, 0);
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

  describe('Rotate', function(){
    it('rotates ship left', function(){
      var ship = new Ship({angle: 0});
      ship.rotateLeft();

      assert.notEqual(ship.angle, 0);
    });

    it('rotates ship right', function(){
      var ship = new Ship({angle: 0});
      ship.rotateRight();

      assert.notEqual(ship.angle, 0);
    });
  });

  describe('Move', function(){
    it('moves ship', function(){
      var ship = new Ship({angle: 10, x: 10, y: 10});
      ship.move();

      assert.notEqual(ship.x, 10);
      assert.notEqual(ship.y, 10);
    });
  });
});
