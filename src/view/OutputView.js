import { OUTPUT_MESSAGE } from '../constants/message';

const OutputView = {
  printError(error) {
    console.log(error.message);
  },

  printEachStepResult(eachStepResults = []) {
    eachStepResults.forEach((result) => {
      console.log(result);
    });
  },

  printResultTitle() {
    console.log(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printWinners(winners = []) {
    console.log(`${OUTPUT_MESSAGE.WINNER_IS} ${winners.join(', ')}`);
  },
};

export default OutputView;
