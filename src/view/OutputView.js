const Console = require('../utils/Console');

const OutputView = {
  printRaceProgress(cars) {
    Console.print('');
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getProgressCount())}`);
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
