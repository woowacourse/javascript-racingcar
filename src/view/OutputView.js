import { OUTPUT_MESSAGE } from '../constants';

const OutputView = {
  printError(error) {
    console.log(error.message);
  },

  printEachStepResult(eachStepCarsResults = []) {
    eachStepCarsResults.forEach((result) => {
      console.log(result);
    });
  },

  printResultTitle() {
    console.log(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printWinner(winners = []) {
    console.log(`${OUTPUT_MESSAGE.WINNER_IS} ${winners.join(', ')}`);
  },
};

export default OutputView;
