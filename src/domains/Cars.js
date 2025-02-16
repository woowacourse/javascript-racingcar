import { RACE } from '../constants/race.js';
import Car from '../domains/Car.js';

class Cars {
  #cars;
  #moveStrategy;

  constructor(carNames, moveStrategy) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#moveStrategy = moveStrategy;
  }

  moveCars() {
    this.#cars.forEach((car) => {
      this.#processMoveCars(car);
    });
  }

  getMaxPosition() {
    return this.#cars.reduce((maxPosition, car) => {
      return car.comparePosition(maxPosition);
    }, -1);
  }

  #processMoveCars(car) {
    if (this.#canMove()) {
      car.move();
    }
  }

  #canMove() {
    return this.#moveStrategy() >= RACE.FOWARD_THRESHOLD;
  }

  get cars() {
    return this.#cars;
  }
}

export default Cars;
