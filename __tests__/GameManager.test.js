/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
// const Car = require('../src/Car');
const GameManager = require('../src/GameManager');
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

  test.each([
    [9, true],
    [4, true],
    [3, false],
    [0, false],
  ])('isFoward Test Random value : %i', (number, expected) => {
    mockRandom(number);
    const gameManager = new GameManager();
    expect(gameManager.isForward()).toEqual(expected);
  });
});
