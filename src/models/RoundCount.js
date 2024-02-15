import Validator from './../utils/Validator';

class RoundCount {
  #roundCount;

  constructor(count) {
    this.#roundCount = 0;
    this.#validate(count);
    this.#roundCount = Number(count);
  }

  #validate(count) {
    Validator.isValidRoundCountExist(count);
    Validator.isValidRoundCountRule(count);
    Validator.isValidRoundCountRange(count);
  }

  raceStart(cars) {
    Array.from({length: this.#roundCount}).forEach(() => (cars.roundStart()));
  }
}

export default RoundCount;
