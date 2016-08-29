function bulletCollisionDetection(projectile, asteroids){
  var collisionDetected = false;
  for(var i = 0; i < asteroids.length; i++ ) {
    var a = asteroids[i];
      if( (projectile.x + 5) > (a.x - 20) && (projectile.x - 5) < (a.x + 20) && (projectile.y + 5) > (a.y - 20) && (projectile.y - 5) < (a.y + 20) ) {
        // console.log("collision detected!");
        collisionDetected = true;
      }
  }
  return collisionDetected;
}

module.exports = bulletCollisionDetection;
