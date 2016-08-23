
document.onkeydown = checkKey;

console.log('test');

function checkKey (e){
  debugger;
  console.log("key checked");
  console.log(e);
  if (e.key === "UpArrow") fireThruster;
}

function fireThruster(){
  debugger;
}

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Ship(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Ship.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

var firstShip = new Ship(50,50,10,10)
requestAnimationFrame(function gameLoop(){
  firstShip.draw();
  requestAnimationFrame(gameLoop)
})
