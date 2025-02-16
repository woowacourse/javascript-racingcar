// @ts-check
import pickRandomNumber from '../utils/pickRandomNumber.js';
import { CONFIG } from '../constants/config.js';
import Car from './Car.js';

class CarManager {
  constructor(carNames = []) {
    this.cars = this.createCars(carNames);
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  isMoveCondition(pickedRandomNumber) {
    return (
      pickedRandomNumber >= CONFIG.MINIMUM_RANDOM_NUMBER &&
      pickedRandomNumber <= CONFIG.MAXIMUM_RANDOM_NUMBER
    );
  }

  moveForwardCar(car, pickedRandomNumber) {
    const moveCondition = this.isMoveCondition(pickedRandomNumber);
    if (moveCondition) {
      car.move();
      return 1;
    }
    return 0;
  }

  race() {
    this.cars.forEach((car) => {
      this.moveForwardCar(car, pickRandomNumber());
    });
  }
}

export default CarManager;
