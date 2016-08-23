function Ship(attributes = {}) {
  this.x = attributes.x || 150;
  this.y = attributes.y || 150;
  this.width = attributes.width || 10;
  this.height = attributes.height || 10;
}

module.exports = Ship;
