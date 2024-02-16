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
    const maxPosition = Math.max(...this.#cars.map((car) => car.position));
    return maxPosition;
  }

  makesRoundResult() {
    const result = {};

    this.#cars.forEach((car) => {
      car.move();
      result[car.name] = car.position;
    });

    return deepFreeze(result);
  }

  judgeWinners() {
    const maxPosition = this.#findMaxPosition();

    const winners = this.#cars
      .filter((car) => car.position === maxPosition)
      .map((winner) => winner.name);

    return deepFreeze(winners);
  }
}

export default CarRace;
