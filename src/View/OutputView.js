import { SYMBOL } from "../Constants/Constants";
import { VIEW_MESSAGES } from "../Constants/Messages";

const { WINNER_PREFIX, NO_WINNER_MESSAGE, DISPLAY_CURRENT_DISTANCE } =
  VIEW_MESSAGES;
const { DIVIDE_SYMBOL } = SYMBOL;

const OutputView = {
  printCarCurrentDistance(car) {
    const name = car.getName();
    const distance = car.getDistance();

    console.log(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printWinner(calculValue) {
    const { hasWinner, winners } = calculValue;

    if (hasWinner) {
      console.log(
        WINNER_PREFIX + winners.map((car) => car.getName()).join(DIVIDE_SYMBOL)
      );
    }
    if (!hasWinner) {
      console.log(NO_WINNER_MESSAGE);
    }
  },
};

export default OutputView;
