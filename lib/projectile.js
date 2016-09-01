var canvas = document.getElementById('game');

function Projectile(ship) {
  this.x = ship.x;
  this.y = ship.y;
  this.angle = ship.angle;
  this.width = 10;
  this.height = 10;
}

Projectile.prototype.draw = function() {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(this.x,this.y,5,0,2*Math.PI);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  return this;
};

Projectile.prototype.move = function() {
  if (this.y > -600) {
    this.x += 10*Math.sin(this.angle);
    this.y -= 10*Math.cos(this.angle);
  }
  return this;
};

Projectile.prototype.edgeCheck = function (x, projectileArray) {
  if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
    projectileArray.splice(x, 1);
  }
};

module.exports = Projectile;
