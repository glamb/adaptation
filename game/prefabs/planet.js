'use strict';

var Planet = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'planet', frame);

  // initialize your prefab here
  
};

Planet.prototype = Object.create(Phaser.Sprite.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Planet;
