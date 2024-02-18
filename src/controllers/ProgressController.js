import CONDITIONS from '../domain/constants/Conditions.js';
import MESSAGES from '../domain/constants/Messages.js';
import getRandomNumberInRange from '../domain/utils/GetRandomNumberInRange.js';
import OutputView from '../view/OutputView.js';

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
      const randoms = [...Array(this.#cars.getCarsCount())].map(() =>
        getRandomNumberInRange(CONDITIONS.minRandomNumber, CONDITIONS.maxRandomNumber),
      );
      this.#cars.progress(randoms);
      this.#printProgress();
    }
  }

  #printProgress() {
    OutputView.printProgress(this.#cars.getCarList());
  }
}
export default ProgressController;
