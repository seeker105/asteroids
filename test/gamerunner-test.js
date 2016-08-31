const assert = require('chai').assert;
const Ship = require('../lib/ship');
const GameRunner = require('../lib/game_runner');
const asteroids = require('../lib/asteroids');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

describe('GameRunner', function(){
  it('creates game with ship attribute', function(){
  var ship = new Ship();
  var game = new GameRunner(ship);

  assert.equal(game.ship, ship);
  });

  it('starts game', function(){
    var ship = new Ship();
    var projectiles = [];
    var lifeCount = 3;
    var game = new GameRunner(ship);
    game.playGame(ship, lifeCount, projectiles);

    assert.equal(game.ship.x, 300);
    assert.equal(game.ship.y, 300);
  });

  it('ends game', function(){
    var ship = new Ship();
    var game = new GameRunner(ship);
    game.gameOver(ship);

    assert.equal(game.ship.x, 1000);
    assert.equal(game.ship.y, 1000);
  });

  it('explodes asteroid', function(){
    var ship = new Ship();
    var game = new GameRunner(ship);

    assert.equal(asteroids.length, 5)

    var hitAsteroid = asteroids[0]
    game.explodeAsteroid(hitAsteroid);

    assert.equal(asteroids.length, 4)
    assert.notInclude(asteroids, hitAsteroid)
  });
});
