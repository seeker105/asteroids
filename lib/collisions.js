
function collisionDetection(ship, asteroids){
  for(var i = 0; i < asteroids.length; i++ ) {
    var a = asteroids[i];
      if(ship.x > a.x && ship.x < a.x + 20 && ship.y > a.y && ship.y < a.y + 20) {
        console.log("collision detected!");
        return true;
      }
      else {
        return false
      }
  }
}

module.exports = collisionDetection;
