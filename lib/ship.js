function Ship(attributes = {}) {
  this.x = attributes.x || 300;
  this.y = attributes.y || 300;
  this.width = attributes.width || 30;
  this.height = attributes.height || 30;
  this.angle = attributes.angle || 0;
}

Ship.prototype.move = function () {
  var shipHalfLength = 15;
  var xWarpLeft = 600 + shipHalfLength;
  var xWarpRight = -shipHalfLength;
  var yWarpBottom = 600 + shipHalfLength;
  var yWarpTop = -shipHalfLength;

  this.x += 2*Math.sin(this.angle);
  this.y -= 2*Math.cos(this.angle);

  if (this.x > xWarpLeft) {this.x = xWarpRight;}
  if (this.x < xWarpRight) {this.x = xWarpLeft;}

  if (this.y > yWarpBottom) {this.y = yWarpTop;}
  if (this.y < yWarpTop) {this.y = yWarpBottom;}

  return this;
};

Ship.prototype.rotateRight = function () {
  this.angle += Math.PI / 30;
  return this;
};

Ship.prototype.rotateLeft = function () {
  this.angle -= Math.PI / 30;
  return this;
};

module.exports = Ship;
