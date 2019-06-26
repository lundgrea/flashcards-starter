const Turn = require('../src/Turn');

class Round {
  constructor(cardDeck) {
    this.deck = cardDeck;
    this.turn = 0;
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cardDeck[this.turn]
  }
  takeTurn(theGuess) {
    let turn = new Turn(theGuess, this.deck.cardDeck[this.turn]);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turn].id)
    }
    this.turn ++;
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
     return Math.floor(100 * (this.deck.cardDeck.length - this.incorrectGuesses.length)/this.deck.cardDeck.length)
  }
}

module.exports = Round