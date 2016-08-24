
function collisionDetection(ship, asteroids){
  for(var i = 0; i < asteroids.length; i++ ) {
    var a = asteroids[i];
      if( (ship.x + ship.width/2) > (a.x - 20) && (ship.x - ship.width/2) < (a.x + 20) && (ship.y + ship.height/2) > (a.y - 20) && (ship.y - ship.height/2) < (a.y + 20) ) {
        console.log("collision detected!");
        return true;
      }
      else {
        return false
      }
  }
}

module.exports = collisionDetection;
