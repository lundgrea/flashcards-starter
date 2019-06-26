const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
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
    game.start()
    expect(game.currentRound.turn).to.equal(0)
  })

it('should keep track of the current round', function(){
    const game = new Game();
    game.start();
    expect(game.roundTracker).to.equal(1);
    game.start();
    expect(game.roundTracker).to.equal(2);
  })

 it('should have a deck of cards', function(){
    const game = new Game();
    game.start();
    expect(game.deck.cardDeck.length).to.equal(30)
  })
});