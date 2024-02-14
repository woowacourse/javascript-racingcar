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
};

export default OutputView;
