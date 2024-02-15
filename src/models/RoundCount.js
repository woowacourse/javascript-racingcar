import Validator from './../utils/Validator';

class RoundCount {
  #roundCount;

  constructor(count) {
    this.#roundCount = 0;
    this.#validate(count);
  }

  #validate(count) {
    Validator.isValidRoundCountExist(count);
  }
}

export default RoundCount;
