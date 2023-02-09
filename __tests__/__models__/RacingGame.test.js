const Random = require('../../src/utils/Random');
const RacingGame = require('../../src/models/RacingGame');
const Car = require('../../src/models/Car');

const TRY_COUNT = 5;
const CAR_NAMES = ['sy', 'aker'];

function mockRandom(numbers) {
  Random.generateNumber = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.generateNumber);
}

describe('RacingGame', () => {
  let racingGame;
  let moveSpy;

  const manipulatedRace = numbers => {
    mockRandom(numbers);
    for (let i = 0; i < TRY_COUNT; i++) racingGame.race();
  };

  beforeEach(() => {
    moveSpy = jest.spyOn(Car.prototype, 'move');

    racingGame = new RacingGame(CAR_NAMES, TRY_COUNT);
  });

  test('각 시도마다 모든 자동차가 전진을 시도한다', () => {
    manipulatedRace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(moveSpy).toHaveBeenCalledTimes(CAR_NAMES.length * TRY_COUNT);
  });

  test('우승자는 aker다.', () => {
    manipulatedRace([3, 4, 3, 4, 3, 4, 3, 4, 3, 4]);

    const WINNERS = ['aker'];
    const winners = racingGame.getWinners();

    winners.forEach((winner, i) => expect(winner).toBe(WINNERS[i]));
  });

  test('우승자는 sy이다.', () => {
    manipulatedRace([4, 3, 4, 3, 4, 3, 4, 3, 4, 3]);

    const WINNERS = ['sy'];
    const winners = racingGame.getWinners();

    winners.forEach((winner, i) => expect(winner).toBe(WINNERS[i]));
  });

  test('우승자는 sy, aker다.', () => {
    manipulatedRace([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);

    const WINNERS = ['sy', 'aker'];
    const winners = racingGame.getWinners();

    winners.forEach((winner, i) => expect(winner).toBe(WINNERS[i]));
  });
});
