import RacingGame from '../src/domain/RacingGame.js';

describe('RacingGame클래스 메서드 테스트', () => {
  const mockFunc = jest.fn();

  test('getRoundResult메서드는 객체 배열 형태로 각 자동차의 라운드 진행 결과를 반환한다', () => {
    const names = ['a', 'b'];
    const round = 1;
    const racingGame = new RacingGame(names, round);

    const randoms = [1, 5];
    randoms.forEach((random) => {
      mockFunc.mockReturnValueOnce(random);
    });

    racingGame.race(mockFunc);

    const result = racingGame.getRoundResult();
    const expected = [
      { name: 'a', position: 0 },
      { name: 'b', position: 1 },
    ];

    expect(result).toEqual(expected);
  });

  test('getHighestScore메서드는 모든 자동차 객체의 position필드 중 가장 큰 수를 반환한다.', () => {
    const names = ['a', 'b'];
    const round = 1;
    const racingGame = new RacingGame(names, round);

    const randoms = [1, 5];
    randoms.forEach((random) => {
      mockFunc.mockReturnValueOnce(random);
    });

    racingGame.race(mockFunc);

    const highestScore = racingGame.getHighestScore();
    const expected = 1;

    expect(highestScore).toBe(expected);
  });

  test('getWinners메서드는 가장 큰 포지션을 가진 우승자 배열을 반환한다.', () => {
    const names = ['a', 'b'];
    const round = 1;
    const racingGame = new RacingGame(names, round);

    const randoms = [1, 5];
    randoms.forEach((random) => {
      mockFunc.mockReturnValueOnce(random);
    });

    racingGame.race(mockFunc);

    const highestScore = 1;
    const winners = racingGame.getWinners(highestScore);
    const expected = ['b'];

    expect(winners).toEqual(expected);
  });

  test('모든 라운드가 종료된 후, isPlaying메서드는 false를 반환해야 한다.', () => {
    const names = ['a', 'b'];
    const round = 1;
    const racingGame = new RacingGame(names, round);

    const randoms = [1, 5];
    randoms.forEach((random) => {
      mockFunc.mockReturnValueOnce(random);
    });

    racingGame.race(mockFunc);

    const isPlaying = racingGame.isPlaying();

    expect(isPlaying).toBe(false);
  });

  test('진행해야 할 라운드가 남은 경우, isPlaying메서드는 true를 반환해야 한다.', () => {
    const names = ['a', 'b'];
    const round = 1;
    const racingGame = new RacingGame(names, round);

    const isPlaying = racingGame.isPlaying();

    expect(isPlaying).toBe(true);
  });
});
