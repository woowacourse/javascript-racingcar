import { deepFreeze } from '../../utils/object/object.js';
import { SYMBOLS } from '../symbols.js';

export const INPUT_MESSAGE = Object.freeze({
  racingCar: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n',
  tryCount: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  executeResult: '\n실행 결과',
  movementIndicator: '-',
});

export const FORMAT_MESSAGE = deepFreeze({
  /**
   * @param {import('../../types/jsDoc.js').RacingResult} racingResult - 자동차 경주 결과
   * @returns {string} 경주 진행 상황을 나타내는 문자열
   */
  racingResultToString(racingResult) {
    const extractCarNameToString = ({ carName, moveCount }) =>
      `${carName} : ${OUTPUT_MESSAGE.movementIndicator.repeat(moveCount)}`;

    const generatePartialRacingResultToString = (racingTurn) => racingTurn.map(extractCarNameToString).join('\n');

    return racingResult.map(generatePartialRacingResultToString).join('\n\n');
  },

  /**
   * @param {string[]} racingWinners - 최종 우승자의 자동차 이름 배열
   * @returns {string} 최종 우승자를 나타내는 문자열
   */
  racingWinnersToString(racingWinners) {
    return `\n최종 우승자: ${racingWinners.join(`${SYMBOLS.comma} `)}`;
  },
});
