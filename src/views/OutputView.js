import Console from '../utils/Console';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printRoundResult(roundResult) {
    const carNames = Object.keys(roundResult);

    carNames.forEach((name) => {
      const positionMark = '-'.repeat(roundResult[name]);
      this.printMessage(`${name} : ${positionMark}`);
    });
  },

  printWinners(winners) {
    this.printMessage(`최종 우승자 : ${winners.join(',')}`);
  },
};

export default OutputView;
