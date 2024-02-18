import { SYMBOL } from '../Constants/Constants';
import { VIEW_MESSAGES } from '../Constants/Messages';

const { WINNER_PREFIX, NO_WINNER_MESSAGE, DISPLAY_CURRENT_DISTANCE } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL } = SYMBOL;

const OutputView = {
  printCarCurrentDistance(car) {
    const name = car.getName();
    const distance = car.getDistance();

    console.log(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printWinner(winners) {
    if (winners.length === 0) {
      console.log(NO_WINNER_MESSAGE);
      return;
    }
    console.log(WINNER_PREFIX + winners.map((car) => car.getName()).join(DIVIDE_SYMBOL));
  },

  printRaceResultHeader() {
    console.log(VIEW_MESSAGES.RESULT_MESSAGE);
  },
};

export default OutputView;
