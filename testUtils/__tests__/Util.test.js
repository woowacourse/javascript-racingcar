import { getLogSpy, mockQuestions, mockRandoms } from '..';
import { DELIMITER, SPACE } from '../../src/constant';
import Game from '../../src/controller/Game';
import { RandomNumber } from '../../src/domain';

describe('Test Util 테스트', () => {
  test(' mockQuestions & getLogSpy 테스트', async () => {
    const logSpy = getLogSpy();
    const carNameArray = ['v', 'h'];
    const roundInput = '2';
    mockQuestions([carNameArray.join(DELIMITER), roundInput]);

    const game = new Game();
    await game.setGame();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        `참가 자동차: ${carNameArray[0]}${DELIMITER}${SPACE}${carNameArray[1]}`,
      ),
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        `게임을 진행할 라운드 횟수:${SPACE}${roundInput}`,
      ),
    );
  });

  test('mockRandoms 테스트', () => {
    const randoms = [0, 9];
    mockRandoms(randoms);

    randoms.forEach((number) => {
      expect(RandomNumber.pickNumberInRange(randoms[0], randoms[1])).toBe(
        number,
      );
    });
  });
});
