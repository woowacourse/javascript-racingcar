const RacingGame = require('../src/domain/RacingGame');
const RandomNumberGenerator = require('../src/util/RandomNumberGenerator');

const mockRandoms = (numbers) => {
  RandomNumberGenerator.generate = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomNumberGenerator.generate);
};

describe('RacingGame 클래스 테스트', () => {
  test('RacingGame을 생성하면 2개의 Car 인스턴스가 생성되고, 현재 이동 거리는 0이다.', () => {
    const racingGame = new RacingGame('룩소,아인', 0);

    const result = racingGame.getAccumulatedDistancern();

    expect(result).toEqual([
      { name: '룩소', currentDistance: 0 },
      { name: '아인', currentDistance: 0 },
    ]);
  });

  test('2개의 자동차와 3번의 시도 횟수, 두 자동차 모두 3번 연속 이동', () => {
    mockRandoms([9, 9, 9, 9, 9, 9]);
    const racingGame = new RacingGame('룩소,아인', 3);

    racingGame.raceOneTurn();
    const resultOfFirstTurn = racingGame.getAccumulatedDistancern();

    racingGame.raceOneTurn();
    const resultOfSecondTurn = racingGame.getAccumulatedDistancern();

    racingGame.raceOneTurn();
    const resultOfThirdTurn = racingGame.getAccumulatedDistancern();

    expect(resultOfFirstTurn).toEqual([
      { name: '룩소', currentDistance: 1 },
      { name: '아인', currentDistance: 1 },
    ]);
    expect(resultOfSecondTurn).toEqual([
      { name: '룩소', currentDistance: 2 },
      { name: '아인', currentDistance: 2 },
    ]);
    expect(resultOfThirdTurn).toEqual([
      { name: '룩소', currentDistance: 3 },
      { name: '아인', currentDistance: 3 },
    ]);
  });

  test('3번의 게임 시도 횟수가 주어질 때, 3번의 턴이 끝나면 게임 종료 상태가 된다.', () => {
    const racingGame = new RacingGame('룩소,아인', 3);

    racingGame.raceOneTurn();
    racingGame.raceOneTurn();
    racingGame.raceOneTurn();

    const isGameComplete = racingGame.isGameComplete();

    expect(isGameComplete).toBe(true);
  });

  test('3번의 턴 동안 룩소 자동차가 3회 이동하고 아인 자동차가 0회 이동일 때, 우승자는 룩소', () => {
    mockRandoms([9, 0, 9, 0, 9, 0]);
    const racingGame = new RacingGame('룩소,아인', 3);

    racingGame.raceOneTurn();
    racingGame.raceOneTurn();
    racingGame.raceOneTurn();

    const winners = racingGame.getWinners();

    expect(winners).toEqual(['룩소']);
  });
});
