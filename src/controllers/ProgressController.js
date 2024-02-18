import MESSAGES from '../constants/Messages.js';
import OutputView from '../views/OutputView.js';

class ProgressController {
  #carList;
  #trialCount;

  constructor(carList, trialCount) {
    this.#carList = carList;
    this.#trialCount = trialCount;
  }

  run() {
    OutputView.print(MESSAGES.resultHeader);
    for (let i = 0; i < this.#trialCount.getCount(); i++) {
      const randoms = [...Array(this.#carList.getCarsCount())].map(() => this.#getRandomNumber());
      this.#carList.progress(randoms);
      this.#printProgress();
    }
  }

  #getRandomNumber() {
    const FROM = 0;
    const TO = 9;
    return Math.floor(Math.random() * (TO - FROM + 1));
  }

  #printProgress() {
    OutputView.printProgress(this.#carList.getNames(), this.#carList.getPositions());
  }
}
export default ProgressController;
