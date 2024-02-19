import Car from './Car';
import AppError from '../utils/Error';

const ERROR_MESSAGES = Object.freeze({
  ONLY_NUM: '숫자 값만 입력해주세요.',
  INVALID_NUM_RANGE: '1 이상 200미만의 숫자만 입력해주세요.',
  DUPLICATE_NAME: '중복된 이름이 있습니다.',
  NO_BLANK: '이름에는 공백이 없어야 합니다.',
});
const TRY_RANGE = Object.freeze({ min: 1, max: 200 });
const BLANK = ' ';

export default class CarRace {
  #cars;

  #tryNum;

  setCarsByCarNames(carNames) {
    this.#checkCarDuplicate(carNames);
    this.#checkCarNameBlank(carNames);
    this.#cars = carNames.map((name) => {
      this.#checkCarNameBlank(name);
      return new Car(name);
    });
  }

  #checkCarDuplicate(carNames) {
    if (carNames.length !== new Set([...carNames]).size) {
      throw new AppError(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  #checkCarNameBlank(name) {
    if (name.includes(BLANK)) {
      throw new AppError(ERROR_MESSAGES.NO_BLANK);
    }
  }

  setTryNum(tryNum) {
    this.#checkTryNum(tryNum);
    this.#tryNum = tryNum;
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError(ERROR_MESSAGES.ONLY_NUM);
    }
    if (number < TRY_RANGE.min || number > TRY_RANGE.max) {
      throw new AppError(ERROR_MESSAGES.INVALID_NUM_RANGE);
    }
  }

  calculateWinners(cars = this.#cars) {
    const MIN_DISTACNE = 0;
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));

    if (maxDistance !== MIN_DISTACNE) {
      const winners = cars.filter((car) => car.getDistance() === maxDistance);
      return { hasWinner: true, winners };
    }
    return { hasWinner: false, winners: [] };
  }

  getCars() {
    return this.#cars;
  }

  getTryNum() {
    return this.#tryNum;
  }
}
