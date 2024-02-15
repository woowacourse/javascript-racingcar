import Validator from './../utils/Validator';

class RoundCount {
  #roundCount;

  #raceResult;

  constructor(count) {
    this.#roundCount = 0;
    this.#raceResult = [];
    this.#validate(count);
    this.#roundCount = Number(count);
  }

  #validate(count) {
    Validator.isValidRoundCountExist(count);
    Validator.isValidRoundCountRule(count);
    Validator.isValidRoundCountRange(count);
  }

  raceStart(cars) {
    const raceResult = Array.from({length: this.#roundCount}).map(() => cars.roundStart());
    this.#raceResult = raceResult;
  }
}

export default RoundCount;
