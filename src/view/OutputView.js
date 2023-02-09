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

  printWinners(winners) {
    Console.print('');
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
