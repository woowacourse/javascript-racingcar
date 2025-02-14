import {
  RESULT_MARK,
  WINNER_DELIMITER,
} from '../constants/PrinterConstants.js';
import { OutputFormat, OutputMessage } from '../constants/OutputMessage.js';

class Printer {
  static printHeader() {
    console.log(OutputMessage.raceResultHeader);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      console.log(OutputFormat.getRaceResult(name, raceResult));
    });

    console.log(OutputMessage.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    console.log(OutputFormat.getWinner(winner));
  }
}

export default Printer;
