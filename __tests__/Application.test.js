import App from '../src/App';
import { SPACE } from '../src/constant';

import { getLogSpy, mockQuestions, mockRandoms } from '../testUtils';

describe('자동차 경주 테스트', () => {
  test('입력한 횟수 만큼 게임 진행 후 우승자 선정', async () => {
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
