/* eslint-disable no-undef */
const IO = require('../src/utils/IO.js');
const Util = require('../src/utils/Util.js');
const App = require('../src/index.js');
const RacingGame = require('../src/domain/RacingGame.js');

describe('레이싱 게임 테스트', () => {
  const game = new RacingGame();
  const carNames = ['eddie', 'pobi', 'crong', 'honux'];
  game.cars = carNames;
  game.tryCount = 1;

  test('자동차의 이름이 잘 할당되었는지 테스트', () => {
    game.cars.forEach((car, index) => {
      expect(car.carName).toMatch(carNames[index]);
    });
  });

  test('랜덤 값에 따라 전진 / 정지가 잘 판단 되는지 테스트', () => {
    const inputRandomNumber = [0, 3, 4, 9];
    const resultMoveCount = [1, 1, 2, 2];

    game.cars.forEach((car, index) => {
      game.judgeMove(inputRandomNumber[index], car);
      expect(car.moveCount).toBe(resultMoveCount[index]);
    });
  });

  test('우승자가 제대로 판단 되는지 테스트', () => {
    expect(game.findWinner()).toEqual(['crong', 'honux']);
  });
});
