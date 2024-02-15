import RaceController from '../service/RaceController';
import { SYMBOLS } from '../statics/constants';
import { ERROR_MESSAGES } from '../statics/messages';
import Car from './Car';
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
      outputView(RaceController.getCycleResult(this.#cars));
    }
  }

  judgeWinner() {
    const winnersPosition = RaceController.getWinnersPosition(this.#cars);
    return RaceController.getWinners(this.#cars, winnersPosition);
  }

  #moveCars() {
    this.#cars.forEach(car => {
      car.move();
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
