/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
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
	  context.fillStyle = "orange";
	  return this;
	};

	Ship.prototype.moveUp = function () {
	  if (this.y > 0) {
	    this.y -= 5;
	  }
	  return this;
	};

	Ship.prototype.moveDown = function () {
	  if (this.y < canvas.height - 10) {
	    this.y += 5;
	  }
	  return this;
	};

	Ship.prototype.moveLeft = function () {
	  if (this.x > 0) {
	    this.x -= 5;
	  }
	  return this;
	};

	Ship.prototype.moveRight = function () {
	  if (this.x < canvas.width - 10) {
	    this.x += 5;
	  }
	  return this;
	};

	var ship = new Ship(150, 150, 10, 10);

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  ship.draw();
	  requestAnimationFrame(gameLoop);
	});

	document.addEventListener('keydown', function (event) {
	  console.log('moving ship!');
	  switch (event.keyCode) {
	    case 38:
	      ship.moveUp();
	      break;

	    case 40:
	      ship.moveDown();
	      break;

	    case 37:
	      ship.moveLeft();
	      break;

	    case 39:
	      ship.moveRight();
	      break;
	  }
	});

/***/ }
/******/ ]);