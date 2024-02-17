import { FORMAT_MESSAGE, OUTPUT_MESSAGE } from '../constants/messages/messages.js';
import Console from '../utils/console.js';

/**
 * @module OutputView
 * 자동차 경주 게임에 대한 출력을 처리하는 모듈
 */
const OutputView = Object.freeze({
  /**
   * @param {import('../types/jsDoc.js').RacingResult} racingResult - 자동차 경주 결과
   * @returns {void}
   */
  printRacingResult(racingResult) {
    Console.print(OUTPUT_MESSAGE.executeResult);

    Console.print(FORMAT_MESSAGE.racingResultToString(racingResult));
  },

  /**
   * @param {string[]} racingWinners - 자동차 경주 우승자들을 담은 문자열 배열
   * @returns {void}
   */
  printRacingWinners(racingWinners) {
    Console.print(FORMAT_MESSAGE.racingWinnersToString(racingWinners));
  },
});

export default OutputView;
