import { getLogSpy, mockQuestions, mockRandoms } from '../index';
import Game from '../../src/controllers/Game';
import { RandomNumber } from '../../src/utils';

describe('Test Util 테스트', () => {
  test.skip(' mockQuestions & getLogSpy 테스트', async () => {
    const logSpy = getLogSpy();

    mockQuestions(['v,h', '2']);

    const game = new Game();
    await game.setGame();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('참가 자동차: v,h'),
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('게임을 진행할 라운드 횟수: 2'),
    );
  });

  test('mockRandoms 테스트', () => {
    const randoms = [0, 9];
    mockRandoms(randoms);

    randoms.forEach((number) => {
      expect(RandomNumber.pickNumber()).toBe(number);
    });
  });
});
