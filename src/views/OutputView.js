const Console = require('../utils/console');

const OutputView = {
  printResultTitle() {
    Console.print('실행 결과');
  },

  printCars(cars) {
    cars.forEach((value, key) => {
      Console.print(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  },

  printWinner(winner) {
    Console.print(`${winner.join(', ')}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
