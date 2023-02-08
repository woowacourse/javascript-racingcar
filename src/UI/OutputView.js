const { print } = require("../Utils/Utils");
const { GAME_MESSAGE, LINE_BREAK } = require("../Utils/Constants");
const { RUN_RESULT_MESSAGE, GAME_RESULT } = GAME_MESSAGE;

const OutputView = {
  printResultMessage() {
    print(RUN_RESULT_MESSAGE);
  },

  printCarMovement(carStatus) {
    for (const { name, count } of Object.entries(carStatus)) {
      print(`${name} ${COLON} ${MOVEMENT_UNIT.repeat(count)}${LINE_BREAK}`);
    }
    print(LINE_BREAK);
  },

  printWinner(winner) {
    print(`${winner}${GAME_RESULT}`);
  },
};

module.exports = OutputView;
