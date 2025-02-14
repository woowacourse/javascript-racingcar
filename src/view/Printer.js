import {
  RESULT_MARK,
  WINNER_DELIMITER,
} from '../constants/PrinterConstants.js';
import { OutputFormat, OutputMessage } from '../constants/OutputMessage.js';

class Printer {
  static print(message) {
    console.log(message);
  }

  static printHeader(message) {
    this.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      this.print(OutputFormat.getRaceResult(name, raceResult));
    });

    this.print(OutputMessage.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    this.print(OutputFormat.getWinner(winner));
  }
}

export default Printer;
