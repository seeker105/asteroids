
function collisionDetection(impactor, asteroids){
  var collisionDetected = false;
  for(var i = 0; i < asteroids.length; i++ ) {
    var a = asteroids[i];
      if( (impactor.x + impactor.width/2) > (a.x - 20) && (impactor.x - impactor.width/2) < (a.x + 20) && (impactor.y + impactor.height/2) > (a.y - 20) && (impactor.y - impactor.height/2) < (a.y + 20) ) {
        collisionDetected = a;
      }
  }
  return collisionDetected;
}

module.exports = collisionDetection;
