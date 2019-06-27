const data = require('./data');
const Turn = require('../src/Turn');

class Round {
  constructor(cardDeck) {
    this.deck = cardDeck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardDeck[this.turn];
  }

  takeTurn(theGuess) {
    let turn = new Turn(theGuess, this.deck.cardDeck[this.turn]);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turn].id)
    }
    this.turn ++;
    let feedback = turn.giveFeedback();
    this.calculatePercentCorrect();
    return feedback;
  }

  calculatePercentCorrect() {
    if (this.turn === this.deck.cardDeck.length) {
      let percentageCorrect = Math.floor(100 * (this.deck.cardDeck.length - this.incorrectGuesses.length) / this.deck.cardDeck.length);
      this.endRound(percentageCorrect);
      return percentageCorrect;
    }
  }

  endRound(percentage) {
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`
  }
}

module.exports = Round