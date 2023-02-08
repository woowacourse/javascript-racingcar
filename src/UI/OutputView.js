const Console = require('./Console');

const OutputView = {
  printResult(racingGame) {
    racingGame.carList.forEach((car) => {
      Console.print(
        `${car.name} : ${new Array(car.position).fill('-').join('')}`
      );
    });
  },
};

module.exports = OutputView;
