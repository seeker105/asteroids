const assert = require('chai').assert;
const collisionDetection = require('../lib/collisions');
const Ship = require('../lib/ship');
const Projectile = require('../lib/ship');

describe('collisionDetection', function(){
  context('asteroid and ship with no overlap', function(){
    var ship = new Ship({x: 200, y: 200});
    var asteroid_1 = {x: 10, y: 15, direction: 25};
    var asteroid_2 = {x: 50, y: 50, direction: 250};
    var asteroids = [asteroid_1, asteroid_2];
    var result = collisionDetection(ship, asteroids);

    it ('should return false', function(){
      assert.equal(result, false);
    });
  });

  context('asteroid-ship collision', function(){
    var ship = new Ship({x: 200, y: 15});
    var asteroid_1 = {x: 100, y: 50, direction: 50};
    var asteroid_2 = {x: 200, y: 15, direction: 25};
    var asteroids = [asteroid_1, asteroid_2];
    var result = collisionDetection(ship, asteroids);

    it ('should return the hit asteroid', function(){
      assert.equal(result, asteroid_2);
    });
  });

  context('asteroid and projectile with no overlap', function(){
    var ship = new Ship({x: 200, y: 250, direction: 0});
    var projectile = new Projectile(ship);

    var asteroid_1 = {x: 50, y: 15, direction: 20};
    var asteroids = [asteroid_1];
    var result = collisionDetection(projectile, asteroids);

    it ('should return false', function(){
      assert.equal(result, false);
    });
  });

  context('asteroid-projectile collision', function(){
    var ship = new Ship({x: 200, y: 15, direction: 0});
    var projectile = new Projectile(ship);

    var asteroid_1 = {x: 200, y: 15, direction: 0};
    var asteroid_2 = {x: 100, y: 50, direction: 50};
    var asteroids = [asteroid_1, asteroid_2];
    var result = collisionDetection(projectile, asteroids);

    it ('should return the hit asteroid', function(){
      assert.equal(result, asteroid_1);
    });
  });
});
