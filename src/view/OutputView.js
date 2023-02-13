import Console from '../util/Console.js';
import { MESSAGE, POSITION_UNIT, WINNER_DIVIDER } from '../util/Constant.js';

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },

  printProcessResult({ carsStatus, tryCount }) {
    Console.print(MESSAGE.output.processResultHeader);
    for (let sequence = 0; sequence < tryCount; sequence++) {
      this.printCarStatus(carsStatus, sequence);
      Console.print('');
    }
  },

  printCarStatus(carsStatus, sequence) {
    carsStatus.forEach(({ name, position }) => {
      const currentPosition = position
        .slice(0, sequence + 1)
        .reduce((acc, cur) => acc + cur, 0);

      Console.print(`${name} : ${POSITION_UNIT.repeat(currentPosition)}`);
    });
  },

  printWinner(winner) {
    Console.print(`${winner.join(WINNER_DIVIDER)}가 최종 우승했습니다.`);
  },
};

export default OutputView;
