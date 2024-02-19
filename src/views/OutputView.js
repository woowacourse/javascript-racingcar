import { Console } from '../utils';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printRaceResult(raceResult) {
    raceResult.forEach((roundResult) => {
      this.printRoundResult(roundResult);
      Console.print('');
    });
  },

  printRoundResult(roundResult) {
    roundResult.forEach((car) => {
      Console.print(car);
    });
  },

  printWinners(winners) {
    Console.print(winners);
  },
};

export default OutputView;
