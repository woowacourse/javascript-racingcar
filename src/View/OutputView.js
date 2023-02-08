const Console = require('../Utils/Console');

const OutputView = {
  printResultMessage() {
    Console.print('\n실행 결과');
  },
  
  printRaceResult(result) {
    result.forEach((value, key) => {
      Console.print(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  }
};

module.exports = OutputView;
