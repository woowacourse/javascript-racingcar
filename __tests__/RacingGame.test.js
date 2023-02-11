import RacingGame from '../src/domain/RacingGame.js';

describe('RacingGame 메소드들이 예상 값을 반환하는 지 테스트', () => {
  const names = ['a', 'b'];
  const round = 3;
  const racingGame = new RacingGame(names, round);

  const mockFunc = jest.fn();
  const randoms = [1, 5, 2, 6, 3, 7];

  randoms.forEach((random) => {
    mockFunc.mockReturnValueOnce(random);
  });

  while (racingGame.isPlaying()) {
    racingGame.race(mockFunc);
  }

  test('모든 라운드가 예상대로 진행 후 isPlaying메소드가 0을 반환한다', () => {
    const round = racingGame.isPlaying();

    expect(round).toBe(0);
  });

  test('라운드 결과를 변환한다', () => {
    const expected = [
      { name: 'a', position: 0 },
      { name: 'b', position: 3 },
    ];
    const result = racingGame.getRoundResult();

    expect(result).toEqual(expected);
  });

  test('모든 차 객체의 포지션 중 가장 큰 수를 반환한다.', () => {
    const expected = 3;
    const highestScore = racingGame.getHighestScore();

    expect(highestScore).toBe(expected);
  });

  test('가장 큰 포지션을 가진 우승자 배열을 반환한다.', () => {
    const expected = ['b'];
    const winners = racingGame.getWinners(3);

    expect(winners).toEqual(expected);
  });
});
