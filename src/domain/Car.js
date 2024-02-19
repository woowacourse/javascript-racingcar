import { CAR } from '../constants/setting';
import Validator from '../utils/Validator';
import discriminator from '../utils/discriminator';
import randomNumberGenerator from '../utils/randomNumberGenerator';

class Car {
  #name;

  constructor(carName) {
    this.#name = carName;
  }

  getCarName() {
    return this.#name;
  }

  setCar(randomNumber) {
    const isForward = discriminator(randomNumber);
    return isForward
      ? { name: this.#name, score: CAR.FORWARD_SYMBOL }
      : { name: this.#name, score: CAR.STOP_SYMBOL };
  }

  actCar() {
    const randomNumber = randomNumberGenerator();
    return this.setCar(randomNumber);
  }
}

export default Car;
