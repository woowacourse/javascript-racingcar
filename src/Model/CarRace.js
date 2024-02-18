import Car from './Car';
import AppError from '../utils/Error';

const ERROR_MESSAGES = Object.freeze({
  ONLY_NUM: '숫자 값만 입력해주세요.',
  INVALID_NUM_RANGE: '1 이상 200미만의 숫자만 입력해주세요.',
  DUPLICATE_NAME: '중복된 이름이 있습니다.',
});
const TRY_RANGE = Object.freeze({ min: 1, max: 200 });

export default class CarRace {
  #cars;

  #tryNum;

  setCars(carNames) {
    this.#checkCarDuplicate(carNames);
    this.#cars = carNames.map((name) => new Car(name));
  }

  getCars() {
    return [...this.#cars];
  }

  #checkCarDuplicate(carNames) {
    if (carNames.length !== new Set([...carNames]).size) {
      throw new AppError(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  setTryNum(tryNum) {
    this.#checkTryNum(tryNum);
    this.#tryNum = tryNum;
  }

  getTryNum() {
    return this.#tryNum;
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError(ERROR_MESSAGES.ONLY_NUM);
    }
    if (number < TRY_RANGE.min || number > TRY_RANGE.max) {
      throw new AppError(ERROR_MESSAGES.INVALID_NUM_RANGE);
    }
  }

  calculateWinners() {
    const MIN_DISTACNE = 0;
    const maxDistance = Math.max(...this.#cars.map((car) => car.getDistance()));

    if (maxDistance !== MIN_DISTACNE) {
      const winners = this.#cars.filter((car) => car.getDistance() === maxDistance);
      return { hasWinner: true, winners };
    }
    return { hasWinner: false, winners: [] };
  }
}
