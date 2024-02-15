import { FORMAT_MESSAGE, OUTPUT_MESSAGE } from '../constants/messages/module.js';
import Console from '../utils/console.js';

const OutputView = Object.freeze({
  printRacingResult(racingResult) {
    Console.print(OUTPUT_MESSAGE.executeResult);

    Console.print(FORMAT_MESSAGE.racingResultToString(racingResult));
  },

  printRacingWinners(racingWinners) {
    Console.print(FORMAT_MESSAGE.racingWinnersToString(racingWinners));
  },
});

export default OutputView;
