import Validator from './../utils/Validator';

class RoundCount {
  #roundCount;

  constructor(count) {
    this.#roundCount = 0;
    this.#validate(count);
  }

  #validate(count) {
    Validator.isValidRoundCountExist(count);
    Validator.isValidRoundCountRule(count);
    Validator.isValidRoundCountRange(count);
  }
}

export default RoundCount;
