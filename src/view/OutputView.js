import { SYMBOLS } from '../constants/setting';

const OutputView = {
  printError(error) {
    console.log(error.message);
  },

  printRaceResult(raceResult) {
    raceResult.forEach((roundResult) => {
      this.printRoundResult(roundResult);
      console.log(SYMBOLS.EMPTY);
    });
  },

  printRoundResult(roundResult) {
    roundResult.forEach((car) => {
      console.log(car);
    });
  },

  printWinners(winners) {
    console.log(winners);
  },
};

export default OutputView;
