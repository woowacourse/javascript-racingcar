import OutputView from './OutputView.js';
import IOMessage from '../constants/IOMessage.js';
import { RESULT_MARK, WINNER_DELIMITER } from '../constants/MagicNumber.js';

class Printer {
  static printHeader(message) {
    OutputView.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      OutputView.print(IOMessage.getRaceResult(name, raceResult));
    });

    OutputView.print(IOMessage.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    OutputView.print(IOMessage.getWinner(winner));
  }
}

export default Printer;
