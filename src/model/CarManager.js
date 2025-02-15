// @ts-check
import pickRandomNumber from '../utils/pickRandomNumber.js';
import OutputView from '../views/OutputView.js';
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
      return car.move();
    }
  }

  race(attempts) {
    for (let i = CONFIG.ZERO; i < attempts; i++) {
      this.cars.forEach((car) => {
        this.moveForwardCar(car, pickRandomNumber());
        OutputView.printRaceResult(car.name, car.position);
      });
      console.log(); // 줄바꿈
    }
  }

  determineWinners() {
    const carsPosition = this.cars.map((car) => car.position);

    const maxPosition = Math.max(...carsPosition);

    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winners;
  }
}

export default CarManager;
