# Asteroids

<img width="511" alt="for-readme" src="https://cloud.githubusercontent.com/assets/17806544/18110639/6817256a-6ed6-11e6-879a-03dfad456151.png">


### Introduction
This is a modified version of the classic Asteroids game.

### Team
* [Anna Weisbrodt](https://github.com/AnnaCW)
* [Christopher Soden](https://github.com/seeker105)

### Stack
* JavaScript
* HTML5 canvas
* Webpack
* Node
* Mocha/Chai

### Game Play
The object of the game is to hit all the asteroids in each level. The next level is reached when all asteroids have been hit. A game consists of three ships or "lives." The ship can be rotated using the arrow keys, and moved forward using the up arrow. Holding down the spacebar fires bullets continuously.

### Test Suite
Unit tests were written using Chai. They can be run by cloning down the project, running `npm install`, `npm start`, then visiting `http://localhost:8080/test.html`.

### Production

[Production App](https://annacw.github.io/asteroids/)

### Installation

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/index.html` to run the application.
* `http://localhost:8080/test.html` to run the test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
