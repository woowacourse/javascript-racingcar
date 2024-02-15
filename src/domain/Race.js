import { REGEX, RULES, SYMBOLS } from '../statics/constants';
import { ERROR_MESSAGES } from '../statics/messages';
import Car from './Car';

class Race {
  #cars;

  #attemptNum;

  set cars(carsName) {
    this.#validateCarsName(carsName);
    this.#cars = carsName.split(SYMBOLS.nameSeperator).map(name => {
      return new Car(name);
    });
  }

  set attemptNum(attemptNum) {
    this.#validateAttemptNum(attemptNum);
    this.#attemptNum = Number(attemptNum);
  }

  #validateCarsName(carsName) {
    const nameRegex = new RegExp(REGEX.carName);
    if (!nameRegex.test(carsName)) throw new Error(ERROR_MESSAGES.invalidCarName);

    const splittedCarNames = carsName.split(SYMBOLS.nameSeperator);
    const uniqueCarNames = new Set(splittedCarNames);
    if (splittedCarNames.length !== uniqueCarNames.size) {
      throw new Error(ERROR_MESSAGES.redundantCarName);
    }
  }

  #validateAttemptNum(attemptNum) {
    if (!Number.isInteger(Number(attemptNum))) throw new Error(ERROR_MESSAGES.invalidAttemptNum);

    if (Number(attemptNum) < RULES.minAttemptNum) throw new Error(ERROR_MESSAGES.invalidAttemptNum);
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
