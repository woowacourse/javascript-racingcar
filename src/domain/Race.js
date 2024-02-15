import { SYMBOLS } from '../statics/constants';
import { ERROR_MESSAGES } from '../statics/messages';
import Car from './Car';
import { hasRedundantCarName, isInvalidAttemptNum, isInvalidCarName } from './validate/validator';

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

  #validateCarsName(carsNameInput) {
    if (isInvalidCarName(carsNameInput)) throw new Error(ERROR_MESSAGES.invalidCarName);
    if (hasRedundantCarName(carsNameInput)) throw new Error(ERROR_MESSAGES.redundantCarName);
  }

  #validateAttemptNum(attemptInput) {
    if (isInvalidAttemptNum(attemptInput)) throw new Error(ERROR_MESSAGES.invalidAttemptNum);
  }

  gameCycle(outputView) {
    for (let i = 0; i < this.#attemptNum; i++) {
      this.#moveCars();
      // Race 도메인에서 처리하면 변수에 초기화시키지 않고 바로 할당하는 게 깔끔할 것 같음.
      outputView(this.#getCycleResult());
    }
  }

  judgeWinner() {
    const winnersPosition = this.#getWinnersPosition();

    return this.#cars
      .filter(car => {
        return car.position === winnersPosition;
      })
      .map(winner => winner.name);
  }

  #moveCars() {
    this.#cars.forEach(car => {
      car.move();
    });
  }

  #getCycleResult() {
    return this.#cars.reduce((cycleResult, car) => {
      cycleResult[car.name] = car.position;
      return cycleResult;
    }, {});
  }

  #getWinnersPosition() {
    return this.#cars.reduce((max, car) => {
      if (max <= car.position) return car.position;
      return max;
    }, 0);
  }
}

export default Race;
