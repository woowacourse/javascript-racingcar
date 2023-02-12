const Console = require('../utils/Console');

const OutputView = {
  printRaceProgress(cars) {
    Console.print('');
    cars.forEach((singleCar) => {
      Console.print(`${singleCar.name} : ${'-'.repeat(singleCar.progressCount)}`);
    });
  },

  printWinners(winners) {
    Console.print('');
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
    Console.close();
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
