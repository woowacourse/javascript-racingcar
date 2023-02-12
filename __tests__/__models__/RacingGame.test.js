const RacingGame = require('../../src/domain/models/RacingGame');

const CAR_NAMES = ['sy', 'aker'];

describe('RacingGame', () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame(CAR_NAMES);
  });

  test('모든 자동차의 위치가 변함이 없으면 allFail이다', () => {
    expect(racingGame.allFailed()).toBe(true);
  });

  test('이동 거리가 가장 많은 자동차(들)이 승리한다', () => {
    expect(racingGame.getWinners()).toEqual(CAR_NAMES);
  });

  test('모든 자동차들을 반환한다', () => {
    expect(racingGame.getCars().map((car) => car.getName())).toEqual(CAR_NAMES);
  });
});
