import { ERROR_MESSAGE } from '../constant/message.js';
import { RULE } from '../constant/rule.js';
import { getRandomNumber } from '../util/randomNumber.js';
import { isDuplicated, isInRange, isLessThanMin } from '../util/validations.js';
import Car from './Car.js';

class Race {
  #cars;
  #tryCount;
  #raceHistory;

  initCars(carNames) {
    this.#validateCarNames(carNames);
    this.#cars = carNames.map((car) => new Car(car));

    this.#raceHistory = new Map(carNames.map((name) => [name, []]));
  }

  initTryCount(tryCount) {
    this.#validateTryCount(tryCount);
    this.#tryCount = tryCount;
  }

  #validateCarNames(carNames) {
    if (isLessThanMin(carNames.length, RULE.carCount.min)) throw new Error(ERROR_MESSAGE.carCount);
    if (isDuplicated(carNames)) throw new Error(ERROR_MESSAGE.carNameDuplicate);
  }

  #validateTryCount(tryCount) {
    if (!isInRange(tryCount, RULE.tryCount.min, RULE.tryCount.max)) throw new Error(ERROR_MESSAGE.tryCount);
  }

  raceStart() {
    Array.from({ length: this.#tryCount }).forEach(() => {
      this.#moveCars();
      this.#updateRaceHistory();
    });
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      if (this.#canCarMove()) car.move();
    });
  }

  #canCarMove() {
    return getRandomNumber(RULE.randomNumber.min, RULE.randomNumber.max) >= RULE.moveCondition;
  }

  #updateRaceHistory() {
    this.#cars.forEach((car) => {
      this.#raceHistory.set(car.name, [...this.#raceHistory.get(car.name), car.position]);
    });
  }

  get cars() {
    return this.#cars;
  }

  get raceHistory() {
    return this.#raceHistory;
  }
}

export default Race;
