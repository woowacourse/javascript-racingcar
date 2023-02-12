const { MESSAGE } = require("../utils/Constant");
const Console = require("../utils/Console")

const OutputView = {
  printCarMove(cars) {
    Console.print('')
    for (let car of cars) {
      Console.print(car.getName() + " : " + "-".repeat(car.getPosition()));
    }
  },

  printWinners(users) {
    const winners = users.join(", ");
    Console.print(`\n${winners}` + MESSAGE.OUTPUT_WINNER);
    Console.close()
  },
};

module.exports = OutputView;
