import assert from 'assert';

import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.equal(15, new Yatzy(2, 3, 4, 5, 1).chance());
    assert.equal(16, new Yatzy(3, 3, 4, 5, 1).chance());
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.equal(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
    assert.equal(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
    assert.equal(0, new Yatzy(6, 6, 6, 6, 3).yatzy());
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.equal(1, new Yatzy(1, 2, 3, 4, 5).ones());
    assert.equal(2, new Yatzy(1, 2, 1, 4, 5).ones());
    assert.equal(0, new Yatzy(6, 2, 2, 4, 5).ones());
    assert.equal(4, new Yatzy(1, 2, 1, 1, 1).ones());
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.equal(4, new Yatzy(1, 2, 3, 2, 6).twos());
    assert.equal(10, new Yatzy(2, 2, 2, 2, 2).twos());
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.equal(6, new Yatzy(1, 2, 3, 2, 3).threes());
    assert.equal(12, new Yatzy(2, 3, 3, 3, 3).threes());
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.equal(12, new Yatzy(4, 4, 4, 5, 5).fours());
    assert.equal(8, new Yatzy(4, 4, 5, 5, 5).fours());
    assert.equal(4, new Yatzy(4, 5, 5, 5, 5).fours());
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    assert.equal(10, new Yatzy(4, 4, 4, 5, 5).fives());
    assert.equal(15, new Yatzy(4, 4, 5, 5, 5).fives());
    assert.equal(20, new Yatzy(4, 5, 5, 5, 5).fives());
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    assert.equal(0, new Yatzy(4, 4, 4, 5, 5).sixes());
    assert.equal(6, new Yatzy(4, 4, 6, 5, 5).sixes());
    assert.equal(18, new Yatzy(6, 5, 6, 6, 5).sixes());
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.equal(6, new Yatzy(3, 4, 3, 5, 6).scorePair());
    assert.equal(10, new Yatzy(5, 3, 3, 3, 5).scorePair());
    assert.equal(12, new Yatzy(5, 3, 6, 6, 5).scorePair());
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.equal(16, new Yatzy(3, 3, 5, 4, 5).two_pair());
    assert.equal(16, new Yatzy(3, 3, 5, 5, 5).two_pair());
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.equal(9, new Yatzy(3, 3, 3, 4, 5).threeOfAKind());
    assert.equal(15, new Yatzy(5, 3, 5, 4, 5).threeOfAKind());
    assert.equal(9, new Yatzy(3, 3, 3, 3, 5).threeOfAKind());
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.equal(12, new Yatzy(3, 3, 3, 3, 5).fourOfAKind());
    assert.equal(20, new Yatzy(5, 5, 5, 4, 5).fourOfAKind());
    assert.equal(0, new Yatzy(3, 3, 3, 2, 1).fourOfAKind());
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.equal(15, new Yatzy(1, 2, 3, 4, 5).smallStraight());
    assert.equal(15, new Yatzy(2, 3, 4, 5, 1).smallStraight());
    assert.equal(0, new Yatzy(1, 2, 2, 4, 5).smallStraight());
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.equal(20, new Yatzy(6, 2, 3, 4, 5).largeStraight());
    assert.equal(20, new Yatzy(2, 3, 4, 5, 6).largeStraight());
    assert.equal(0, new Yatzy(1, 2, 2, 4, 5).largeStraight());
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.equal(18, new Yatzy(6, 2, 2, 2, 6).fullHouse());
    assert.equal(0, new Yatzy(2, 3, 4, 5, 6).fullHouse());
  });
});
