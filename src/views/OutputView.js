import { CONFIG } from '../constants/config.js';
import { OUTPUT } from '../constants/messages.js';

const OutputView = {
  printRaceResult(name, position) {
    console.log(`${name} : ${CONFIG.RACE_STEP.repeat(position)}`);
  },

  printResultGreeting() {
    console.log(OUTPUT.RESULT_GREETING);
  },
};

export default OutputView;
