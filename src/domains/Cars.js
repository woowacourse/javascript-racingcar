import getRandomNumber from "../utils/getRandomNumber.js";
import Car from "./Car.js";

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
    if (getRandomNumber() >= 4) {
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
