import MESSAGES from '../constants/Messages.js';
import Cars from '../entities/Cars.js';
import OutputView from '../views/outputView.js';

class ProgressController {
  #cars;
  #trialCount;

  constructor(cars, trialCount) {
    this.#cars = cars;
    this.#trialCount = trialCount;
  }

  run() {
    OutputView.print(MESSAGES.resultHeader);
    for (let i = 0; i < this.#trialCount.getCount(); i++) {
      const randoms = [...Array(this.#cars.getCarsCount())].map(() => this.getRandomNumber());
      this.#cars.progress(randoms);
      this.#printProgress();
    }
  }

  getRandomNumber() {
    const FROM = 0;
    const TO = 9;
    return Math.floor(Math.random() * (TO - FROM + 1));
  }

  #printProgress() {
    OutputView.printProgress(this.#cars.getState());
  }
}
export default ProgressController;
