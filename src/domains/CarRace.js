import deepFreeze from '../utils/deepFreeze';
import Car from './Car';
import pickNumberInRange from '../utils/pickNumberInRange';
import { RULES } from '../constants/car-race';

class CarRace {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = this.#initRaceCars(cars);
    this.#tryCount = tryCount;
  }

  #initRaceCars(cars) {
    return cars.map((carName) => new Car(carName));
  }

  #findMaxPosition() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.position));
    return maxPosition;
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      const randomNumber = pickNumberInRange(
        RULES.minRandomNumber,
        RULES.maxRandomNumber,
      );

      car.move(randomNumber);
    });
  }

  #makeRoundResult() {
    const roundResult = {};

    this.#cars.forEach((car) => {
      this.#moveCars();
      roundResult[car.name] = car.position;
    });
    return roundResult;
  }

  makeTotalRoundResult() {
    const results = [];

    for (let count = 0; count < this.#tryCount; count++) {
      const roundResult = this.#makeRoundResult();
      results.push(roundResult);
    }

    return deepFreeze(results);
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
