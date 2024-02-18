import { SYMBOL, VIEW_MESSAGES } from '../Constants';

const { WINNER_PREFIX, NO_WINNER_MESSAGE, DISPLAY_CURRENT_DISTANCE } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL } = SYMBOL;

const OutputView = {
  printCarCurrentDistance({ car, index }) {
    const { name, distance } = car.getInfo();

    if (index === 0) {
      console.log(`\n${DISPLAY_CURRENT_DISTANCE(name, distance)}`);
      return;
    }
    console.log(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printWinner(winners) {
    if (winners.length === 0) {
      console.log(NO_WINNER_MESSAGE);
      return;
    }
    console.log(WINNER_PREFIX + winners.map((car) => car.getInfo().name).join(DIVIDE_SYMBOL));
  },

  printRaceResultHeader() {
    console.log(`\n${VIEW_MESSAGES.RESULT_MESSAGE}`);
  },
};

export default OutputView;
