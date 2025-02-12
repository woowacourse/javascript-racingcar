// @ts-check
import Car from './Car.js';
import { CONFIG } from './constants/config.js';
import pickRandomNumber from './utils/pickRandomNumber.js';

class CarManager {
  constructor() {
    this.cars = [];
  }

  createCars(names) {
    const carNames = this.splitCarName(names);

    this.cars = carNames.map((carName) => new Car(carName));
    return this.cars;
  }

  splitCarName(names) {
    return names.split(`${CONFIG.COMMA} `);
  }

  isMoveCondition(pickedRandomNumber) {
    return pickedRandomNumber >= 4 && pickedRandomNumber <= 9;
  }

  moveForwardCar(car, pickedRandomNumber) {
    const moveCondition = this.isMoveCondition(pickedRandomNumber);
    if (moveCondition) {
      return car.move();
    }
  }
}

export default CarManager;
