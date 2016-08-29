var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Projectile(ship) {
  this.x = ship.x;
  this.y = ship.y;
  this.angle = ship.angle;
};

Projectile.prototype.draw = function() {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(this.x,this.y,5,0,2*Math.PI);
  context.stroke();
  context.fillStyle = "black";
  context.fill();

  return this;
};

Projectile.prototype.move = function(ship) {
  if (this.y > -600) {
    this.x += 10*Math.sin(ship.angle);
    this.y -= 10*Math.cos(ship.angle);
    console.log("moved projectile");
    console.log(this.x);
    console.log(this.y);
  };
  return this;
}

module.exports = Projectile;
