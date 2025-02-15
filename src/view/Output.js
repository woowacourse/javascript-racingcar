import positionToStr from '../utils/positionToStr.js';
import OUTPUT from '../constant/output.js';

const OutputView = {
  printBeforeResult() {
    console.log(OUTPUT.BEFORE_RESULT);
  },
  printRoundResult(name, position) {
    console.log(`${name} : ${positionToStr(position)}`);
  },
  printWinners(winners) {
    console.log(`${OUTPUT.WINNER}${winners}`);
  },
};

export default OutputView;
