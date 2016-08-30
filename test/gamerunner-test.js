const assert = require('chai').assert;
const Ship = require('../lib/ship');
const GameRunner = require('../lib/game_runner');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

describe('GameRunner', function(){
  it('creates game with ship attribute', function(){
  var ship = new Ship();
  var game = new GameRunner(ship);

  assert.equal(game.ship, ship)
  });

  it('starts game', function(){
    var ship = new Ship();
    var projectiles = [];
    var lifeCount = 3;
    var game = new GameRunner(ship);
    game.playGame(ship, lifeCount, projectiles);

    assert.equal(game.ship.x, 300)
    assert.equal(game.ship.y, 300)
  });

  it('ends game', function(){
    var ship = new Ship();
    var game = new GameRunner(ship);
    game.gameOver(ship);

    assert.equal(game.ship.x, 1000)
    assert.equal(game.ship.y, 1000)
  });
});
