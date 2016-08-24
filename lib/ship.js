var canvas = document.getElementById('game');
var largeAsteroidRadius = 20;
var xWarpLeft = canvas.width + largeAsteroidRadius;
var xWarpRight = -largeAsteroidRadius;
var yWarpBottom = canvas.height + largeAsteroidRadius;
var yWarpTop = -largeAsteroidRadius;


function Ship(attributes = {}) {
  this.x = attributes.x || canvas.width/2;
  this.y = attributes.y || canvas.height/2;
  this.width = attributes.width || 30;
  this.height = attributes.height || 30;
  this.angle = attributes.angle || 0;
}

Ship.prototype.draw = function () {
  var context = canvas.getContext('2d');
    // the line above needs to stay here or things will break!
  var shipimg = new Image();
  shipimg.src = 'assets/images/ship.png';
   context.save();
   context.translate(this.x, this.y);
   context.rotate(this.angle);
   context.drawImage(shipimg, -(this.width/2), -(this.height/2), this.width, this.height);
   context.restore();
   return this;
  };

Ship.prototype.move = function () {
  this.x += 5*Math.sin(this.angle);
  this.y -= 5*Math.cos(this.angle);

  if (this.x > xWarpLeft) this.x = xWarpRight;
  if (this.x < xWarpRight) this.x = xWarpLeft;

  if (this.y > yWarpBottom) this.y = yWarpTop;
  if (this.y < yWarpTop) this.y = yWarpBottom;

  return this;
  };

  Ship.prototype.rotateRight = function () {
    this.angle += Math.PI / 45;
    return this;
  };

  Ship.prototype.rotateLeft = function () {
    this.angle -= Math.PI / 45;
    return this;
  };

module.exports = Ship;
