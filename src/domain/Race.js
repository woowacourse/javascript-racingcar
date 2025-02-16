import { getRandomNumber } from '../util/randomNumber.js';
import { isDuplicated, isInRange, isLessThanMin } from '../util/validations.js';
import Car from './Car.js';

class Race {
  #cars;
  #tryCount;
  #raceHistory;

  constructor(carNames, tryCount) {
    this.#validateCarNames(carNames);
    this.#validateTryCount(tryCount);

    this.#cars = carNames.map((car) => new Car(car));
    this.#tryCount = tryCount;
    this.#raceHistory = new Map(carNames.map((name) => [name, []]));
  }

  #validateCarNames(carNames) {
    if (isLessThanMin(carNames.length, 2)) throw new Error('[ERROR] 자동차는 2대 이상이여야 합니다.');
    if (isDuplicated(carNames)) throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다.');
  }

  #validateTryCount(tryCount) {
    if (!isInRange(tryCount, 1, 20)) throw new Error('[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.');
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
    return getRandomNumber(0, 9) >= 4;
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
