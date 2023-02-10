const RacingGame = require('../src/RacingGame');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

const mockRandoms = (numbers) => {
  RandomNumberGenerator.generate = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomNumberGenerator.generate);
};

describe('자동차를 관리하는 클래스 테스트', () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame(['pobi', 'crong', 'honux']);
  });

  test('자동차 각각을 전진시킨다', () => {
    mockRandoms([5, 2, 1]);

    racingGame.progressAllCars();

    expect(racingGame.getCars().map((car) => car.getProgressCount())).toEqual([1, 0, 0]);
  });

  describe('경주 우승자를 도출하는 기능 테스트', () => {
    test('우승자가 한 명인 경우 우승자 한 명의 이름이 담긴 배열을 반환한다.', () => {
      mockRandoms([5, 2, 1]);

      racingGame.progressAllCars();

      const winners = racingGame.getWinners();
      expect(winners).toEqual(['pobi']);
    });

    test('우승자가 두 명 이상인 경우 모든 우승자의 이름이 담긴 배열을 반환한다.', () => {
      mockRandoms([6, 7, 2]);

      racingGame.progressAllCars();

      const winners = racingGame.getWinners();
      expect(winners).toEqual(['pobi', 'crong']);
    });
  });
});
