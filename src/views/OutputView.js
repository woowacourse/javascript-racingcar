import { MESSAGES } from '../constants/car-race';
import Console from '../utils/Console';

const OutputView = {
  printRoundResult(roundResult) {
    const carNames = Object.keys(roundResult);

    carNames.forEach((name) => {
      const positionMark = MESSAGES.positionMark.repeat(roundResult[name]);
      Console.print(`${name} : ${positionMark}`);
    });
  },

  printWinners(winners) {
    Console.print(`${MESSAGES.winner}${winners.join(',')}`);
  },

  printBlankLine() {
    Console.print('');
  },
};

export default OutputView;
