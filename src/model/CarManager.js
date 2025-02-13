// @ts-check
import Car from './Car.js';
import pickRandomNumber from '../utils/pickRandomNumber.js';
import OutputView from '../views/OutputView.js';
import { CONFIG } from '../constants/config.js';

class CarManager {
  constructor() {
    this.cars = [];
  }

  createCars(carNames) {
    this.cars = carNames.map((carName) => new Car(carName));
    return this.cars;
  }

  isMoveCondition(pickedRandomNumber) {
    return pickedRandomNumber >= CONFIG.MINIMUM_RANDOM_NUMBER
    && pickedRandomNumber <= CONFIG.MAXIMUM_RANDOM_NUMBER;
  }

  moveForwardCar(car, pickedRandomNumber) {
    const moveCondition = this.isMoveCondition(pickedRandomNumber);
    if (moveCondition) {
      return car.move();
    }
  }

  race(attempts) {
    OutputView.printResultGreeting();
    for (let i = CONFIG.ZERO; i < attempts; i++) {
      this.cars.forEach((car) => {
        this.moveForwardCar(car, pickRandomNumber());
        this.showRaceResult(car.name, car.position);
      });
      console.log('\n');
    }
  }

  showRaceResult(name, position) {
    OutputView.printRaceResult(name, position);
  }

  determineWinners() {
    const carsPosition = this.cars.map((car) => (
      car.position
    ));

    const maxPosition = Math.max(...carsPosition);

    const winners = this.cars.filter((car) => (
      car.position === maxPosition
    )).map((car) => car.name);

    return winners;
  }
}

export default CarManager;
