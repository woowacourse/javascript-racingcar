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
  }

  #pickRandomNumber() {
    const START = 0;
    const END = 10;
    const randomNumber = Math.floor(START + Math.random() * END);
    return randomNumber;
  }
}

export default Car;
