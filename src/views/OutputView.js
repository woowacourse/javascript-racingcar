import { SYMBOLS } from '../constants/setting';
import consolePrint from '../utils/consolePrint';

const OutputView = {
  printError(error) {
    consolePrint(error.message);
  },

  printRaceResult(raceResult) {
    raceResult.forEach((roundResult) => {
      this.printRoundResult(roundResult);
      consolePrint(SYMBOLS.EMPTY);
    });
  },

  printRoundResult(roundResult) {
    roundResult.forEach((car) => {
      consolePrint(car);
    });
  },

  printWinners(winners) {
    consolePrint(winners);
  },
};

export default OutputView;
