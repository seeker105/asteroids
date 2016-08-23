var canvas = document.getElementById('game');

function Ship(attributes = {}) {
  this.x = attributes.x || 150;
  this.y = attributes.y || 150;
  this.width = attributes.width || 10;
  this.height = attributes.height || 10;
}

Ship.prototype.moveUp = function () {
  if (this.y > 0) {
      this.y-=5;
    }
  return this;
};

Ship.prototype.moveDown = function () {
  if (this.y < canvas.height - 10) {
      this.y+=5;
     }
  return this;
};

Ship.prototype.moveLeft = function () {
  if (this.x > 0) {
      this.x-=5;
     }
  return this;
};

Ship.prototype.moveRight = function () {
  if (this.x < canvas.width - 10) {
      this.x+=5;
     }
  return this;
};


module.exports = Ship;
