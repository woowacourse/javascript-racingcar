import {
  RESULT_MARK,
  WINNER_DELIMITER,
  OUTPUT_DESCRIPTION,
  OUTPUT_FORMAT,
} from '../domain/constants/PrinterConstants.js';

class Printer {
  static printHeader() {
    console.log(OUTPUT_DESCRIPTION.raceResultHeader);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = RESULT_MARK.repeat(position);

      console.log(OUTPUT_FORMAT.raceResultPhrase(name, raceResult));
    });

    console.log(OUTPUT_DESCRIPTION.lineBreak);
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(WINNER_DELIMITER);

    console.log(OUTPUT_FORMAT.winnerPhrase(winner));
  }
}

export default Printer;
