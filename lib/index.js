
document.onkeydown = checkKey;

function checkKey (e){
  console.log("key checked");
  console.log(e);
  
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

// ships = [new Ship(50,50,10,10), new Ship(100,100,10,10)]
// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   ships.forEach(function (ship) {
//     ship.draw();
//   });
//   requestAnimationFrame(gameLoop);
// });
