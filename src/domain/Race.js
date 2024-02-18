import Car from './Car';
import RaceCalculator from './RaceCalculator';

import { ERRORS } from '../statics/messages';
import { RULES, SYMBOLS } from '../statics/constants';

import Random from '../utils/Random';

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
      outputView(RaceCalculator.getCycleResult(this.#cars));
    }
  }

  judgeWinner() {
    const winnersPosition = RaceCalculator.getWinnersPosition(this.#cars);
    return RaceCalculator.getWinners(this.#cars, winnersPosition);
  }

  #moveCars() {
    this.#cars.forEach(car => {
      const randNum = this.#getRandomNumber();
      const canMove = randNum >= RULES.moveThreshold;
      car.move(canMove);
    });
  }

  #getRandomNumber() {
    const { minRandomRange, maxRandomRange } = RULES;
    return Random.pickNumberInRange(minRandomRange, maxRandomRange);
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
