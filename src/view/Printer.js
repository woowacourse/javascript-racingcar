import OutputView from './OutputView.js';
import IO_MESSAGE from '../constants/IO_MESSAGE.js';
import { RESULT_MARK, WINNER_DELIMITER } from '../constants/MAGIC_NUMBER.js';

class Printer {
  static printHeader(message) {
    OutputView.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      OutputView.print(IO_MESSAGE.getRaceResult(name, raceResult));
    });

    OutputView.print(IO_MESSAGE.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    OutputView.print(IO_MESSAGE.getWinner(winner));
  }
}

export default Printer;
