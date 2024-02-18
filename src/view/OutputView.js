import OPT from '../constant/options.js';
import { MESSAGE } from '../constant/strings.js';

const outputView = {
  print(message) {
    console.log(message);
  },

  printCurrentResultTitle() {
    this.print(MESSAGE.middleResult);
  },

  printCurrentLocation(carInfos) {
    carInfos.forEach(({ name, location }) => {
      this.print(`${MESSAGE.currentLocation(name, location)}`);
    });
    this.print('');
  },

  printWinners(winners) {
    const result = winners.join(OPT.OUTPUT.finalWinnerDelimiter);
    this.print(`${MESSAGE.finalWinner}${result}`);
  }
};

export default outputView;
