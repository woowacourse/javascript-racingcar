const { MESSAGE } = require("../utils/Constant");

const OutputView = {
  printCarMove(cars) {
    console.log();
    for (let car of cars) {
      console.log(car.getName() + " : " + "-".repeat(car.getPosition()));
    }
  },

  printWinners(users) {
    const winners = users.join(", ");
    console.log(`\n${winners}` + MESSAGE.OUTPUT_WINNER);
  },
};

module.exports = OutputView;
