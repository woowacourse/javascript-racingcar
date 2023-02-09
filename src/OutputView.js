const Console = require('./utils/Console');

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },

  printResult() {
    Console.print('\n실행 결과');
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
  },

  printError(error) {
    Console.print(error.message);
  },

  printCar(name, pos) {
    let result = `${name} : `;
    result += new Array(pos).fill('-').join('');
    Console.print(result);
  },
};

module.exports = OutputView;
