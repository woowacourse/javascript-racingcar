// @ts-check
import Car from './Car.js';
import pickRandomNumber from '../../utils/pickRandomNumber.js';
import OutputView from '../../views/OutputView.js';
import { CONFIG } from '../../constants/config.js';

class Race {
  constructor() {
    this.cars = [];
  }

  createCars(carNames) {
    this.cars = carNames.map((carName) => new Car(carName));
  }

  isMoveCondition(pickedRandomNumber) {
    return pickedRandomNumber >= CONFIG.MINIMUM_RANDOM_NUMBER
    && pickedRandomNumber <= CONFIG.MAXIMUM_RANDOM_NUMBER;
  }

  race(attempts) {
    for (let i = CONFIG.INITIAL_NUMBER; i < attempts; i++) {
      this.cars.forEach((car) => {
        this.moveForwardCar(car, pickRandomNumber());
        OutputView.printRaceResult(car.name, car.position);
      });
      console.log();
    }
  }

  moveForwardCar(car, pickedRandomNumber) {
    const condition = this.isMoveCondition(pickedRandomNumber);
    car.move(condition);
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

export default Race;
