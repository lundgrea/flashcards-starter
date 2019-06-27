const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

var card1, card2, card3;

beforeEach(() => {
  card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
})

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

    it('should include cards within an array', function() {
      const deck = new Deck([card1, card2, card3]);

      expect(deck.cardDeck).to.eql([card1, card2, card3]);
  });

 it('should tell you how many cards are in the deck', function() {
      const deck = new Deck([card1, card2, card3]);

      expect(deck.countCards()).to.equal(3);
  });

});