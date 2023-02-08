const Console = require('../utils/Console');

const OutputView = {
  printRaceProgress(cars) {
    cars.forEach((singleCar) => {
      Console.print(
        `${singleCar.getName()} : ${'-'.repeat(singleCar.getProgressCount())}`,
      );
    });
  },
};

module.exports = OutputView;
