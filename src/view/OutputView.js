import { OUTPUT_MESSAGE } from '../constants/constants';

const OutputView = {
  printError(error) {
    console.log(error.message);
  },

  printEachStepResult(cars = {}) {
    console.log(cars.getEachStepString());
  },

  printResultTitle() {
    console.log(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printWinner(winners = []) {
    console.log(`${OUTPUT_MESSAGE.WINNER_IS} ${winners.join(', ')}`);
  },
};

export default OutputView;
