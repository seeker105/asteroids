function Render (canvas, context) {
  this.canvas = canvas;
  this.context = context;
}

Render.prototype.renderShip = function(ship) {

  var shipimg = new Image();
  shipimg.src = 'assets/images/ship_white.png';
  var context = this.context;
   context.save();
   context.translate(ship.x, ship.y);
   context.rotate(ship.angle);
   context.drawImage(shipimg, -(ship.width/2), -(ship.height/2), ship.width, ship.height);
   context.restore();
   return ship;
}

module.exports = Render;
