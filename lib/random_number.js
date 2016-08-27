function RandomNumber(min, max){
  this.min = min;
  this.max = max;
}

RandomNumber.prototype.getRandomNumber = function() {
  var min = this.min;
  var max = this.max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = RandomNumber;
