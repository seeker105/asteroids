var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Ship(attributes = {}) {
  this.x = attributes.x || 0;
  this.y = attributes.y || 0;
  this.width = attributes.width || 30;
  this.height = attributes.height || 30;
  this.angle = attributes.angle || 0;
}

Ship.prototype.draw = function () {
  var shipimg = new Image();
  shipimg.src = 'assets/images/ship.png';
   context.save();
   context.translate(canvas.width / 2, canvas.height / 2);
   context.rotate(this.angle);
   context.drawImage(shipimg, this.x, this.y, this.width, this.height);
   context.restore();
   return this;
  };

Ship.prototype.move = function () {
  this.x += Math.sin(this.angle);
  this.y -= Math.cos(this.angle);
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
