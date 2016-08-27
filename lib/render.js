const Ship = require('../lib/ship');
const asteroids = require('../lib/asteroids');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var img = new Image();
img.src = 'assets/images/nebula.png';


// var ship = new Ship();



function renderShip(){
  var context = canvas.getContext('2d');
    // the line above needs to stay here or things will break!
  var shipimg = new Image();
  shipimg.src = 'assets/images/ship_white.png';
   context.save();
   context.translate(this.x, this.y);
   context.rotate(this.angle);
   context.drawImage(shipimg, -(this.width/2), -(this.height/2), this.width, this.height);
   context.restore();
   return this;
}



module.exports = renderShip;
