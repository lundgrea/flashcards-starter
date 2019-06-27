const data = require('./data');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess(guess) {
    return this.guess;
  }

  returnCard(card) {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else  {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "Great work!";
    } else {
      return "Keep trying...";
    }
  }
}

module.exports = Turn