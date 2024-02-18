import Car from './Car';
import RaceCalculator from './RaceCalculator';

import { ERRORS } from '../statics/messages';
import { RULES, SYMBOLS } from '../statics/constants';

import Random from '../utils/Random';

import { hasRedundantCarName, hasSingleCarName, isInvalidAttemptNum, isInvalidCarNameForm } from './validate/validator';

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
    Array.from({ length: this.#attemptNum }, () => {
      this.#moveCars();
      outputView(RaceCalculator.getCycleResult(this.#cars));
    });
  }

  judgeWinner() {
    const winnersPosition = RaceCalculator.getWinnersPosition(this.#cars);
    return RaceCalculator.getWinners(this.#cars, winnersPosition);
  }

  #moveCars() {
    this.#cars.forEach(car => {
      const randNum = this.#getRandomNumber();

      if (randNum >= RULES.moveThreshold) {
        car.move();
      }
    });
  }

  #getRandomNumber() {
    const { minRandomRange, maxRandomRange } = RULES;
    return Random.pickNumberInRange(minRandomRange, maxRandomRange);
  }

  #validateCarsName(carsNameInput) {
    if (isInvalidCarNameForm(carsNameInput)) throw new Error(ERRORS.invalidCarNameForm);
    if (hasRedundantCarName(carsNameInput)) throw new Error(ERRORS.hasRedundantCarName);
    if (hasSingleCarName(carsNameInput)) throw new Error(ERRORS.hasSingleCarName);
  }

  #validateAttemptNum(attemptInput) {
    if (isInvalidAttemptNum(attemptInput)) throw new Error(ERRORS.invalidAttemptNum);
  }
}

export default Race;
