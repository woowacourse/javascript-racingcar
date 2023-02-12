import { utils } from "../Utils/Utils.js";
import { GAME_MESSAGE, LINE_BREAK } from "../Utils/Constants.js";

const { RUN_RESULT_MESSAGE, GAME_RESULT, COLON, MOVEMENT_UNIT } = GAME_MESSAGE;

const OutputView = {
  printResultMessage() {
    utils.print(RUN_RESULT_MESSAGE);
  },

  printCarMovement(carStatus) {
    for (const car of carStatus) {
      const { name, position } = car.getCarStatus();
      utils.print(`${name} ${COLON} ${MOVEMENT_UNIT.repeat(position)}`);
    }

    utils.print(LINE_BREAK);
  },

  printWinner(winner) {
    utils.print(`${winner}${GAME_RESULT}`);
  },
};

export default OutputView;
