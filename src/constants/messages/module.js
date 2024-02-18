import { SYMBOLS } from '../symbols.js';

export const INPUT_MESSAGE = Object.freeze({
  racingCar: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n',
  tryCount: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  executeResult: '\n실행 결과',
});

export const FORMAT_MESSAGE = Object.freeze({
  racingResultToString(racingResult) {
    return racingResult
      .map((racingTurn) =>
        racingTurn.map(({ carName, moveCount }) => `${carName} : ${'-'.repeat(moveCount)}`).join('\n'),
      )
      .join('\n\n');
  },

  racingWinnersToString(racingWinners) {
    return `\n최종 우승자: ${racingWinners.join(`${SYMBOLS.comma} `)}`;
  },
});
