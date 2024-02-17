import { CAR } from '../constants/setting';
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
      return { name: this.#name, score: CAR.FORWARD_SYMBOL };
    }

    return { name: this.#name, score: CAR.STOP_SYMBOL };
  }
}

export default Car;
