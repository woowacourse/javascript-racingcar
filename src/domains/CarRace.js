import deepFreeze from '../utils/deepFreeze';
import Car from './Car';
import pickNumberInRange from '../utils/pickNumberInRange';
import { RULES } from '../constants/car-race';

class CarRace {
  #cars;

  constructor(cars) {
    this.#cars = this.#initRaceCars(cars);
  }

  #initRaceCars(cars) {
    return cars.map((carName) => new Car(carName));
  }

  #findMaxPosition() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.position));
    return maxPosition;
  }

  #canMove() {
    const randomNumber = pickNumberInRange(
      RULES.minRandomNumber,
      RULES.maxRandomNumber,
    );
    return randomNumber >= RULES.moveStandard;
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }

  #makeRoundResult() {
    const result = {};

    this.#cars.forEach((car) => {
      result[car.name] = car.position;
    });

    return deepFreeze(result);
  }

  makesRoundResult() {
    this.#moveCars();
    return this.#makeRoundResult();
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
