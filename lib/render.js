var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var img = new Image();
img.src = 'assets/images/nebula.png';

function Render() {
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
};

Render.prototype.renderGameOver = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  context.fillStyle = "red";
  context.textAlign = "center";
  context.font = "30px Arial";
  context.fillText("Game Over",canvas.width/2,canvas.height/2);
};

Render.prototype.renderPlayGame = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
};

Render.prototype.lifeCount = function (lifeCount) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0, 600, 600);
  context.fillStyle = "red";
  context.textAlign = "center";
  context.font = "30px Arial";
  context.fillText(lifeCount + " Lives Left",canvas.width/2,canvas.height/2);
};

Render.prototype.renderExplosions = function (hits) {
  hits.forEach(function(hit){
    hit.explode();
  })
}

module.exports = Render;
