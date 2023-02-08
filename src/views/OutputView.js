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

  printResult(cars) {},
};

module.exports = OutputView;
