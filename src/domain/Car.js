import CONDITION from '../constants/Condition';
import { Validator } from '../utils';

class Car {
  #name;

  constructor(carName) {
    this.#validate(carName);
    this.#name = carName;
  }

  #validate(carName) {
    Validator.validCarNameLengthRange(carName);
    Validator.validCarNameRule(carName);
  }

  getName() {
    return this.#name;
  }

  actCar(randomNumber) {
    const isForward = this.#judgeForwardMovement(randomNumber);

    return isForward
      ? { name: this.#name, score: CONDITION.RACE.FORWARD }
      : { name: this.#name, score: CONDITION.RACE.STOP };
  }

  #judgeForwardMovement(randomNumber) {
    return randomNumber >= CONDITION.RACE.FORWARD_CONDITION;
  }
}

export default Car;
