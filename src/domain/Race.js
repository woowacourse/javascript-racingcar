import { getRandomNumber } from '../util/randomNumber.js';
import { isDuplicated, isInRange, isLessThanMin } from '../util/validations.js';
import Car from './Car.js';

class Race {
  cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#validateCarNames(carNames);
    this.#validateTryCount(tryCount);

    this.cars = carNames.map((car) => new Car(car));
    this.#tryCount = tryCount;
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
    });
  }

  #moveCars() {
    this.cars.forEach((car) => {
      car.move(this.#canCarMove());
    });
  }

  #canCarMove() {
    return getRandomNumber(0, 9) >= 4;
  }
}

export default Race;
