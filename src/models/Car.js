import Validator from '../utils/Validator';

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
    const randomNumber = this.#pickRandomNumber();
    const isForward = this.#judgeForwardMovement(randomNumber);

    if (isForward) {
      return {name: this.#name, isForward: 1};
    }

    return {name: this.#name, isForward: 0};
  }

  #pickRandomNumber() {
    const START = 0;
    const END = 10;
    const randomNumber = Math.floor(START + Math.random() * END);
    return randomNumber;
  }

  #judgeForwardMovement(randomNumber) {
    const isForward = randomNumber >= 4;
    return isForward;
  }
}

export default Car;
