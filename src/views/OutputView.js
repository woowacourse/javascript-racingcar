import { MESSAGE } from '../constants/message';

const OutputView = {
  printWinners(winners) {
    console.log(`${MESSAGE.WINNER} ${winners.join(', ')}`);
  },

  printTurnResult(turnResult) {
    turnResult.forEach((carInfo) => {
      const positionString = MESSAGE.POSITION_SYMBOL.repeat(carInfo.position);
      console.log(`${carInfo.name} : ${positionString}`);
    });
    console.log();
  },

  print(message) {
    console.log(message);
  },
};

export default OutputView;
