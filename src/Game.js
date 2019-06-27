const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Game {
  constructor() {
    this.currentRound;
    this.deck;
    this.roundTracker = 0;
  }

  start() {
    this.deckBuilder();
    this.roundBuilder();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.roundTracker ++
  }

  deckBuilder() {
    let currentDeck = new Deck(prototypeQuestions.map((card) => {
      return new Card(card)
    }));
    this.deck = currentDeck;
  }

  roundBuilder() {
    this.currentRound = new Round(this.deck);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;