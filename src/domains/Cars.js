import { RACE } from '../constants/race.js';
import Car from '../domains/Car.js';
import getRandomNumber from '../utils/getRandomNumber.js';

class Cars {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  moveCars() {
    this.#cars.forEach((car) => {
      this.#processMoveCars(car);
    });
  }

  #processMoveCars(car) {
    if (getRandomNumber() >= RACE.FOWARD_THRESHOLD) {
      car.move();
    }
  }

  getMaxPosition() {
    return this.#cars.reduce((maxPosition, car) => {
      return car.comparePosition(maxPosition);
    }, -1);
  }

  get cars() {
    return this.#cars;
  }
}

export default Cars;
