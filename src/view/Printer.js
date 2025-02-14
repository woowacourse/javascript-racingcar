import {
  RESULT_MARK,
  WINNER_DELIMITER,
} from '../constants/PrinterConstants.js';
import { OUTPUT_MESSAGE, OUTPUT_FORMAT } from '../constants/OutputMessage.js';

class Printer {
  static printHeader() {
    console.log(OUTPUT_MESSAGE.raceResultHeader);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      console.log(OUTPUT_FORMAT.getRaceResult(name, raceResult));
    });

    console.log(OUTPUT_MESSAGE.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    console.log(OUTPUT_FORMAT.getWinner(winner));
  }
}

export default Printer;
