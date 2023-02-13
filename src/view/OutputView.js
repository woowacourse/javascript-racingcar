import Console from '../util/Console.js';
import { MESSAGE, POSITION_UNIT, WINNER_DIVIDER } from '../util/Constant.js';

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },

  printProcessResult({ carsStatus, tryCount }) {
    Console.print(MESSAGE.output.processResultHeader);
    new Array(tryCount).fill(null).forEach((_, order) => {
      this.printCarStatus(carsStatus, order);
      Console.print('');
    });
  },

  printCarStatus(carsStatus, order) {
    carsStatus.forEach(({ name, position }) => {
      const currentPosition = position
        .slice(0, order + 1)
        .reduce((acc, cur) => acc + cur, 0);

      Console.print(`${name} : ${POSITION_UNIT.repeat(currentPosition)}`);
    });
  },

  printWinner(winner) {
    Console.print(`${winner.join(WINNER_DIVIDER)}가 최종 우승했습니다.`);
  },
};

export default OutputView;
