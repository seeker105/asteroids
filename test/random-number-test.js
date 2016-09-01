const assert = require('chai').assert;
const RandomNumber = require('../lib/random_number');

describe('Random Number', function(){
  it('returns random number between given min and max', function(){
    var random = new RandomNumber(1, 15);

    assert.isAbove(random.getRandomNumber(), 0);
    assert.isBelow(random.getRandomNumber(), 16);
  });
});
