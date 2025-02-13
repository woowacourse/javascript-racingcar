import { CONFIG } from '../constants/config.js';

const OutputView = {
  printRaceResult(name, position) {
    console.log(`${name} : ${CONFIG.RACE_STEP.repeat(position)}`);
  },

  printResultGreeting() {
    console.log('실행 결과');
  },
};

export default OutputView;
