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

  test('자동차 관리자 인스턴스를 생성한다.', () => {
    expect(racingGame.getCars().length).toEqual(3);
  });

  test('자동차 각각을 전진시킨다', () => {
    mockRandoms([5, 2, 1]);

    racingGame.progress();

    expect(racingGame.getCars().map((singleCar) => singleCar.getProgressCount())).toEqual(
      [1, 0, 0],
    );
  });

  describe('경주 우승자를 도출한다.', () => {
    test('우승자가 한 명인 경우', () => {
      mockRandoms([5, 2, 1]);

      racingGame.progress();

      const winners = racingGame.getWinners();
      expect(winners.length === 1 && winners[0] === 'pobi').toBe(true);
    });

    test('우승자가 두 명 이상인 경우', () => {
      mockRandoms([6, 7, 2]);

      racingGame.progress();

      const winners = racingGame.getWinners();
      expect(winners).toEqual(['pobi', 'crong']);
    });
  });
});
