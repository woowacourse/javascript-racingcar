import Validator from '../utils/Validator';
import discriminator from '../utils/discriminator';
import randomNumberGenerator from '../utils/randomNumberGenerator';

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

  getCarName() {
    return this.#name;
  }

  actCar() {
    const randomNumber = randomNumberGenerator();
    const isForward = discriminator(randomNumber);

    if (isForward) {
      return { name: this.#name, score: 1 };
    }

    return { name: this.#name, score: 0 };
  }
}

export default Car;
