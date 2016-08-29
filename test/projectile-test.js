const assert = require('chai').assert;
const Projectile = require('../lib/projectile');
const Ship = require('../lib/ship');

describe('Projectile', function(){
  var ship = new Ship(300, 300, 0);
  var projectile = new Projectile(ship);

  it('should assign starting attributes based on ship', function (){
    assert.equal(projectile.x, 300)
    assert.equal(projectile.y, 300)
    assert.equal(projectile.angle, 0)
  });

  it('should move projectile at angle of ship', function(){
    projectile.move();

    assert.equal(projectile.angle, ship.angle)
  });

  it('should move projectile', function(){
    projectile.move();

    assert.notEqual(projectile.y, 300)
  });
});
