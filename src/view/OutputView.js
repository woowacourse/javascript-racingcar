// constants
import { ERROR_MESSAGE, MESSAGE, OPTION } from '../constants/System.js';

const OutputView = {
  print(message) {
    console.log(message);
  },

  printErrorMessage(error) {
    this.print(`${ERROR_MESSAGE.PREFIX} ${error}`);
  },

  printCurrentResultTitle() {
    this.print(MESSAGE.RESULT);
  },

  printCurrentLocation(carInfos) {
    carInfos.forEach(({ name, location }) => {
      this.print(`${MESSAGE.CURRENT_LOCATION(name, location)}`);
    });
    this.print('');
  },

  printWinners(winners) {
    const result = winners.join(OPTION.OUPUT_DELIMITER);
    this.print(`${MESSAGE.WINNER} ${result}`);
  },
};

export default OutputView;
