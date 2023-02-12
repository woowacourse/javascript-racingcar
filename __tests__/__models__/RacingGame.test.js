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

  const manipulatedRace = (numbers) => {
    mockRandom(numbers);
    racingGame.raceNTimes(TRY_COUNT);
  };

  const expectWinners = (expectedWinners) => {
    const winners = racingGame.getWinners();

    winners.forEach((winner, i) => expect(winner).toBe(expectedWinners[i]));
  };

  beforeEach(() => {
    racingGame = new RacingGame(CAR_NAMES);
  });

  test('각 시도마다 모든 자동차가 전진을 시도한다', () => {
    const moveSpy = jest.spyOn(Car.prototype, 'move');

    manipulatedRace([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);

    expect(moveSpy).toHaveBeenCalledTimes(CAR_NAMES.length * TRY_COUNT);
  });

  test('스냅샷이 올바르게 저장되어야 한다.', () => {
    const SNAP_SHOTS = [
      'sy : -\naker : ',
      'sy : -\naker : -',
      'sy : --\naker : --',
      'sy : ---\naker : ---',
      'sy : ----\naker : ----',
    ];
    manipulatedRace([4, 0, 0, 4, 4, 4, 4, 4, 4, 4]);
    const snapShots = racingGame.getSnapShots();

    expect(snapShots).toEqual(SNAP_SHOTS);
  });

  test('우승자는 aker다.', () => {
    manipulatedRace([3, 4, 3, 4, 3, 4, 3, 4, 3, 4]);
    expectWinners(['aker']);
  });

  test('우승자는 sy이다.', () => {
    manipulatedRace([4, 3, 4, 3, 4, 3, 4, 3, 4, 3]);
    expectWinners(['sy']);
  });

  test('우승자는 sy, aker다.', () => {
    manipulatedRace([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
    expectWinners(['sy', 'aker']);
  });
});
