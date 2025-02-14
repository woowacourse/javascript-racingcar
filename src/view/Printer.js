import OutputView from './OutputView.js';
import {
  RESULT_MARK,
  WINNER_DELIMITER,
} from '../constants/PrinterConstants.js';
import { OutputFormat, OutputMessage } from '../constants/OutputMessage.js';

class Printer {
  static printHeader(message) {
    OutputView.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      OutputView.print(OutputFormat.getRaceResult(name, raceResult));
    });

    OutputView.print(OutputMessage.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    OutputView.print(OutputFormat.getWinner(winner));
  }
}

export default Printer;
