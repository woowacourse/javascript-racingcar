import Car from './Car';
import RaceGameCalculator from './RaceGameCalculator';

import { SYMBOLS } from '../statics/constants';
import { ERRORS } from '../statics/messages';

import { hasRedundantCarName, hasSingleCar, isInvalidAttemptNum, isInvalidCarName } from './validate/validator';

class Race {
  #cars;

  #attemptNum;
  set cars(carsNameInput) {
    this.#validateCarsName(carsNameInput);
    this.#cars = carsNameInput.split(SYMBOLS.nameSeperator).map(name => {
      return new Car(name);
    });
  }

  set attemptNum(attemptInput) {
    this.#validateAttemptNum(attemptInput);
    this.#attemptNum = Number(attemptInput);
  }

  gameCycle(outputView) {
    for (let i = 0; i < this.#attemptNum; i++) {
      this.#moveCars();
      outputView(RaceGameCalculator.getCycleResult(this.#cars));
    }
  }

  judgeWinner() {
    const winnersPosition = RaceGameCalculator.getWinnersPosition(this.#cars);
    return RaceGameCalculator.getWinners(this.#cars, winnersPosition);
  }

  #moveCars() {
    this.#cars.forEach(car => {
      car.move();
    });
  }

  #validateCarsName(carsNameInput) {
    if (isInvalidCarName(carsNameInput)) throw new Error(ERRORS.invalidCarName);
    if (hasRedundantCarName(carsNameInput)) throw new Error(ERRORS.hasRedundantCarName);
    if (hasSingleCar(carsNameInput)) throw new Error(ERRORS.hasSingleCar);
  }

  #validateAttemptNum(attemptInput) {
    if (isInvalidAttemptNum(attemptInput)) throw new Error(ERRORS.invalidAttemptNum);
  }
}

export default Race;
