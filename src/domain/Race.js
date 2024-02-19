import Car from './Car';
import RaceCalculator from './RaceCalculator';
import { RULES, SYMBOLS } from '../statics/constants';
import { ERROR_MESSAGES } from '../statics/messages';
import { hasRedundantCarName, hasSingleCar, isInvalidAttemptNum, isInvalidCarName } from './validate/validator';
import Random from '../utils/Random';

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
    const { moveThreshold, minRandomRange, maxRandomRange } = RULES;

    this.#cars.forEach(car => {
      const randNum = Random.pickNumberInRange(minRandomRange, maxRandomRange);
      
      if (randNum >= moveThreshold) {
        car.move();
      };
    });
  }

  #validateCarsName(carsNameInput) {
    if (isInvalidCarName(carsNameInput)) throw new Error(ERROR_MESSAGES.invalidCarName);
    if (hasRedundantCarName(carsNameInput)) throw new Error(ERROR_MESSAGES.hasRedundantCarName);
    if (hasSingleCar(carsNameInput)) throw new Error(ERROR_MESSAGES.hasSingleCar);
  }

  #validateAttemptNum(attemptInput) {
    if (isInvalidAttemptNum(attemptInput)) throw new Error(ERROR_MESSAGES.invalidAttemptNum);
  }
}

export default Race;
