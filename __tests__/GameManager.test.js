/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const GameManager = require('../src/controller/GameManager');

describe('GameManager Test', () => {

  test.each([
    [
      ['yun', 'park', 'kim'],
      [[9, 0, 1], [8, 1, 2], [7, 5, 6]],
      ['yun']
    ],
    [
      ['choi', 'ann', 'lee', 'gabi'],
      [[0, 0, 5, 5], [0, 0, 9, 9]],
      ['lee', 'gabi'],
    ],
    [
      ['aa', 'bb'],
      [[0, 0], [5, 5], [0, 0], [9, 9]],
      ['aa', 'bb'],
    ],
  ])('가장 많이 전진 한 사람들을 승자로 판단하는 테스트 (%#)', (carNames, moves, winners) => {
    const gameManager = new GameManager();
    const cars = gameManager.generateCars(carNames);
    gameManager.setCars(cars);
    moves.forEach((numbers) => {
      gameManager.moveCars(numbers);
    })
    expect(gameManager.judgeWinners()).toEqual(winners);
  });
});
