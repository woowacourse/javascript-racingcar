import Validator from '../utils/Validator';
import gameUtils from '../utils/gameUtils';

class Car {
  #name;
  
  constructor(carName) {
    this.#validate(carName);
    this.#name = carName;
  }

  #validate(carName) {
    Validator.isValidCarNameLengthRange(carName);
    Validator.isValidCarNameRule(carName);
  }

  addNameForDuplicatedCheck(uniqueCarNames) {
    uniqueCarNames.add(this.#name);
  }

  actCar() {
    const randomNumber = gameUtils.pickRandomNumber();
    const isForward = this.#judgeForwardMovement(randomNumber);

    if (isForward) {
      return {name: this.#name, score: 1};
    }

    return {name: this.#name, score: 0};
  }

  #judgeForwardMovement(randomNumber) {
    const isForward = randomNumber >= 4;
    return isForward;
  }
}

export default Car;
