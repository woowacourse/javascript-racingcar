import { MESSAGES } from '../constants/car-race';
import Console from '../utils/Console';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printRoundResult(roundResult) {
    const carNames = Object.keys(roundResult);

    carNames.forEach((name) => {
      const positionMark = MESSAGES.positionMark.repeat(roundResult[name]);
      this.printMessage(`${name} : ${positionMark}`);
    });
  },

  printWinners(winners) {
    this.printMessage(`${MESSAGES.winner}${winners.join(',')}`);
  },

  printBlankLine() {
    this.printMessage('');
  },
};

export default OutputView;
