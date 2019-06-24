const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

it('should expect a guess', function() {
    const turn = new Turn('My guess');
    expect(turn.guess).to.equal('My guess');
  });  

it('should expect a card object', function() {
    const turn = new Turn('My guess', Card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.card).to.equal(Card);
  });  

it('should be able to return the guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('This guess', Card);
  expect(turn.returnGuess()).to.equal('This guess')
});

it('should be able to return the card', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('This guess', Card);
  expect(turn.returnCard()).to.equal(Card)
});

it('should be able to evaluate the guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn1 = new Turn('object', card);
  const turn2 = new Turn('something else', card);

  turn1.evaluateGuess()
  expect(turn1.evaluateGuess()).to.equal(true);
  turn2.evaluateGuess()
  expect(turn2.evaluateGuess()).to.equal(false);

});

it('should be able to provide feedback on the guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn2 = new Turn('some answer', card);

  turn2.evaluateGuess()
  turn2.giveFeedback()
  expect(turn2.giveFeedback()).to.equal("Keep trying...");
  
  const turn1 = new Turn('object', card);
  turn1.evaluateGuess()
  turn1.giveFeedback()
  expect(turn1.giveFeedback()).to.equal("Great work!");

});

});
