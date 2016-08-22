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

Ship.prototype.moveDown = function () {
  if (this.y < canvas.height - 10) {
      this.y++;
     }
  else {
    this.y;
   }
  return this;
};

var ship = new Ship(50, 10, 10, 10);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ship.draw().moveDown();
  requestAnimationFrame(gameLoop)
});

document.addEventListener('click', function (event) {
  // var click = getClickPosition(event);
  console.log('You clicked me!');

});
