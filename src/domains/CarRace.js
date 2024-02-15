import deepFreeze from '../utils/deepFreeze';
import Car from './Car';

class CarRace {
  #cars;

  constructor(cars) {
    this.#cars = this.#initRaceCars(cars);
  }

  #initRaceCars(cars) {
    const spliitedCars = cars.split(',').map((carName) => carName.trim());
    return spliitedCars.map((carName) => new Car(carName));
  }

  #findMaxPosition() {
    let maxPositionCar = this.#cars[0];
    for (let index = 1; index < this.#cars.length; index++) {
      if (!maxPositionCar.isAheadOf(this.#cars[index])) {
        maxPositionCar = this.#cars[index];
      }
    }

    return maxPositionCar;
  }

  makesRoundResult() {
    const result = {};

    this.#cars.forEach((car) => {
      car.move();
      result[car.getName()] = car.getPosition();
    });

    return deepFreeze(result);
  }

  judgeWinners() {
    const maxPositionCar = this.#findMaxPosition();
    const winners = this.#cars
      .filter((car) => maxPositionCar.isSamePosition(car))
      .map((winner) => winner.getName());

    return deepFreeze(winners);
  }
}

export default CarRace;
