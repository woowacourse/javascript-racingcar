const RacingGame = require('../src/domain/RacingGame');

describe('RacingGame 메소드들이 예상 값을 반환하는 지 테스트', () => {
  const names = ['a', 'b'];
  const round = 3;
  const racingGame = new RacingGame(names, round);

  test('모든 라운드가 예상대로 진행 후 isPlaying메소드가 false를 반환한다', () => {
    racingGame.race();
    racingGame.race();
    racingGame.race();

    const isPlaying = racingGame.isPlaying();

    expect(isPlaying).toBeFalsy();
  });
});
