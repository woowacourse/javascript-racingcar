import { MESSAGE } from '../constants/message';

const OutputView = {
  printWinners(winners) {
    console.log(`${MESSAGE.WINNER} ${winners.join(', ')}`);
  },

  printCarPosition(name, positionString) {
    console.log(`${name} : ${positionString}`);
  },

  print(message = '') {
    console.log(message);
  },
};

export default OutputView;
