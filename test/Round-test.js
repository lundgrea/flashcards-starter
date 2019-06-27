const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

var card1, card2, card3;

beforeEach(() => {
  card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
})

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should have an array of cards within the deck of the round', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck.cardDeck).to.eql([card1, card2, card3]);
  });

  it('should be able to provide the current card', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.equal(card1)
  });
  
  it('should start with no turns', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turn).to.equal(0)
  });
  
  it('should start with no incorrect guesses', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.eql([])
  });
  
  it('should evaluate a guess that is incorrect', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('capybara')).to.equal('Keep trying...')
  });
  
  it('should evaluate a guess that is correct', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('sea otter')).to.equal('Great work!')
  });
  
  it('should increase a turn with each guess', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('capybara');
    round.takeTurn('spleen');
    expect(round.turn).to.equal(2)
  });
  
  it('should add incorrect guesses to a list of incorrect guesses', function  () {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('capybara');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.eql([1, 14])
  });
  
  it('should make the next card the current card after every turn', function  () {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('capybara');
    expect(round.returnCurrentCard()).to.equal(card2);
    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.equal(card3);
  });
  
  it('should tell your the percentage correct of right answers', function()   {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music')
    expect(round.calculatePercentCorrect()).to.equal(33);
  })
  
  it('should tell you when the round is over and provide a percentage of questions correct', function() { 
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music')
    expect(round.endRound(33)).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  })

});