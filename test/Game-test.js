const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Game');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should start with the current round as 0', function(){
    const game = new Game();
    expect(game.round).to.equal(0)
  })

it('should keep track of the current round', function(){
    const game = new Game();
    game.start();
    expect(game.round).to.equal(1);
  })

  it('should have a start method that kicks off the game', function(){
    const game = new Game();
    game.start();
    

  })

});