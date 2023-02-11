const { print } = require("../Utils/Utils");
const { GAME_MESSAGE, LINE_BREAK } = require("../Utils/Constants");
const { RUN_RESULT_MESSAGE, GAME_RESULT, COLON, MOVEMENT_UNIT } = GAME_MESSAGE;

const OutputView = {
  printResultMessage() {
    print(RUN_RESULT_MESSAGE);
  },

  printCarMovement(carStatus) {
    for (const car of carStatus) {
      const { name, position } = car.getCarStatus();
      print(`${name} ${COLON} ${MOVEMENT_UNIT.repeat(position)}`);
    }
    print(LINE_BREAK);
  },

  printWinner(winner) {
    print(`${winner}${GAME_RESULT}`);
  },
};

module.exports = OutputView;
