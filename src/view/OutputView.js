import { MESSAGE } from '../constant/strings.js';

const outputView = {
  print(message) {
    console.log(message);
  },

  printMiddleResultTitle() {
    this.print(MESSAGE.middleResultTitle);
  },

  printMiddleResults(middleResults) {
    middleResults.forEach((middleResult) => {
      middleResult.forEach(({ name, location }) => {
        this.print(`${MESSAGE.middleResult(name, location)}`);
      });
      this.print('');
    });
  },

  printFinalResult(finalWinners) {
    this.print(`${MESSAGE.finalResult(finalWinners)}`);
  }
};

export default outputView;
