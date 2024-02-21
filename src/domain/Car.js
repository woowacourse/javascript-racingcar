import { CAR } from '../constants/setting';
import isForward from '../utils/isForward';
import randomNumberGenerator from '../utils/randomNumberGenerator';

class Car {
  #name;

  constructor(carName) {
    this.#name = carName;
  }

  getCarName() {
    return this.#name;
  }

  calculateScore(randomNumber) {
    return isForward(randomNumber)
      ? { name: this.#name, score: CAR.FORWARD_SYMBOL }
      : { name: this.#name, score: CAR.STOP_SYMBOL };
  }

  actCar() {
    const randomNumber = randomNumberGenerator();
    return this.calculateScore(randomNumber);
  }
}

export default Car;
