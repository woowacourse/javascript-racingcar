import App from '../src/App';
import { SPACE } from '../src/constant';

import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils';

describe('자동차 경주 테스트', () => {
  test('입력한 횟수만큼 게임 진행', async () => {
    const carNameInput = '아아,뜨아,ICE티';
    const roundInput = '5';
    const randoms = [5, 3, 6, 5, 3, 9, 7, 8, 1, 4, 1, 2, 9, 7, 5];
    const roundMessageArray = Array.from(
      { length: Number(roundInput) },
      (_, index) => `라운드:${index + 1}`,
    );
    const outputs = [
      ...roundMessageArray,
      '아아 : -',
      '아아 : --',
      '아아 : ---',
      '아아 : ----',
      '아아 : -----',
    ];

    const logSpy = getLogSpy();

    mockQuestions([carNameInput, roundInput]);
    mockRandoms(randoms);

    const app = new App();
    await app.play();

    outputs.forEach((output) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)),
    );
  });

  describe('우승자 판단', () => {
    test('제일 많이 전진한 자동차가 우승하며 공동 우승의 경우 쉼표(",")를 사용해 이름을 구분', async () => {
      const carNameInput = 'pobi,woni,jun';
      const roundInput = '3';
      const randoms = [5, 3, 6, 2, 3, 9, 7, 8, 1];
      const winnerOutput = `최종 우승자: pobi,${SPACE}jun`;
      const outputs = [
        `라운드:${roundInput}`,
        'pobi : --',
        'woni : -',
        'jun : --',
        winnerOutput,
      ];

      const logSpy = getLogSpy();

      mockQuestions([carNameInput, roundInput]);
      mockRandoms(randoms);

      const app = new App();
      await app.play();

      outputs.forEach((output) =>
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)),
      );
    });

    test('참가한 자동차 모두 전진하지 못했다면 최종 우승자는 없음', async () => {
      const carNameInput = 'pobi,woni,jun';
      const roundInput = '3';
      const randoms = [3, 3, 3, 1, 1, 1, 2, 2, 2];
      const output = '최종 우승자: 없음';

      const logSpy = getLogSpy();

      mockQuestions([carNameInput, roundInput]);
      mockRandoms(randoms);

      const app = new App();
      await app.play();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
