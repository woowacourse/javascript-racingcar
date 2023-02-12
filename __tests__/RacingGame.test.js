const RacingGame = require('../src/domain/RacingGame');

describe('자동차 경주 게임을 진행하는 클래스 테스트', () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame(['pobi', 'crong', 'honux']);
  });

  describe('경주 우승자를 도출하는 기능 테스트', () => {
    test('우승자가 한 명인 경우 우승자 한 명의 이름이 담긴 배열을 반환한다.', () => {
      const conditionNumbers = [5, 2, 1];

      racingGame.getCars().forEach((car, idx) => {
        car.tryProgress(conditionNumbers[idx]);
      });

      expect(racingGame.getWinners()).toEqual(['pobi']);
    });

    test('우승자가 두 명 이상인 경우 모든 우승자의 이름이 담긴 배열을 반환한다.', () => {
      const conditionNumbers = [6, 7, 2];

      racingGame.getCars().forEach((car, idx) => {
        car.tryProgress(conditionNumbers[idx]);
      });

      expect(racingGame.getWinners()).toEqual(['pobi', 'crong']);
    });
  });
});
