const Console = require('../utils/Console');

const OutputView = {
  printRaceProgress(cars) {
    Console.print('');
    cars.forEach((singleCar) => {
      Console.print(
        `${singleCar.getName()} : ${'-'.repeat(singleCar.getProgressCount())}`,
      );
    });
  },
};

module.exports = OutputView;
