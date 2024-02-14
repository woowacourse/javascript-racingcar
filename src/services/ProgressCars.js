class ProgressCars {
  #cars;
  #trialCount;

  constructor(cars, trialCount) {
    this.#cars = cars;
    this.#trialCount = trialCount;
  }

  #getRandomNumber() {
    FROM = 0;
    TO = 9;
    return Math.floor(Math.random() * (TO - FROM + 1));
  }
}
export default ProgressCars;
