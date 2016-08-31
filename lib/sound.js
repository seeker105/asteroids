function Sound(){
  this.sound = document.createElement("audio");
  this.sound.src = 'assets/sounds/explosion_x.wav';
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
}

module.exports = Sound;
