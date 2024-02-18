import { SYMBOL, VIEW_MESSAGES } from '../Constants';

const { WINNER_PREFIX, DISPLAY_CURRENT_DISTANCE } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL, BLANK } = SYMBOL;

const OutputView = {
  printCarCurrentDistance(car) {
    const { name, distance } = car.getInfo();

    console.log(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printRaceResult(winners) {
    console.log(`\n${VIEW_MESSAGES.RESULT_MESSAGE}`);
    console.log(WINNER_PREFIX + winners.map((car) => car.getInfo().name).join(DIVIDE_SYMBOL));
  },

  printBlankLine() {
    console.log(BLANK);
  },
};

export default OutputView;
