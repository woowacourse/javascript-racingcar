/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
// const Car = require('../src/Car');
// const GameManager = require('../src/GameManager');
const RandomGenerator = require('../src/utils/RandomGenerator');

const mockRandom = (number) => {
  RandomGenerator.pickRandomNumber = jest.fn();
  RandomGenerator.pickRandomNumber.mockReturnValueOnce(number);
};

describe('GameManager Test', () => {
  test('Random mock Test', () => {
    mockRandom(10);
    expect(RandomGenerator.pickRandomNumber()).toBe(10);
  });
});
