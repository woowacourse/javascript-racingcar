import Cars from '../entities/Cars.js';

class ProgressController {
  #cars;
  #trialCount;

  constructor(carStr, trialCount) {
    this.#cars = new Cars(carStr);
    this.#trialCount = trialCount;
  }

  getRandomNumber() {
    FROM = 0;
    TO = 9;
    return Math.floor(Math.random() * (TO - FROM + 1));
  }

  run() {
    for (let i = 0; i < this.#trialCount; i++) {
      this.#cars.progress(this.getRandomNumber());
    }
  }
}
export default ProgressController;
