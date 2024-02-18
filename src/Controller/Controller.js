import Car from '../Model/Car';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';
import AppError from '../utils/Error';

const RESULT_MESSAGE = '실행 결과';
const ERROR_MESSAGES = Object.freeze({
  ONLY_NUM: '숫자 값만 입력해주세요.',
  INVALID_NUM_RANGE: '1 이상 200미만의 숫자만 입력해주세요.',
  DUPLICATE_NAME: '중복된 이름이 있습니다.',
});
const TRY_RANGE = Object.freeze({ min: 1, max: 200 });
const BLANK_STR = '';

export default class Controller {
  #cars;

  async run() {
    this.#cars = await this.#makeCars();
    const tryNum = await this.#makeTryNum();
    this.#runRace(tryNum);
    OutputView.printMessage(RESULT_MESSAGE);

    const calculValue = this.#calculateWinners(this.#cars);
    OutputView.printWinner(calculValue);
  }

  async #makeCars() {
    try {
      const carNames = await InputView.readCars();
      this.#checkCarDuplicate(carNames);
      return carNames.map((name) => new Car(name));
    } catch (error) {
      const returnValue = await this.#printErrorAndRetry(error, this.#makeCars);
      return returnValue;
    }
  }

  #checkCarDuplicate(carNames) {
    if (carNames.length !== new Set([...carNames]).size) {
      throw new AppError(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  async #makeTryNum() {
    try {
      const tryNum = await InputView.readTry();
      this.#checkTryNum(tryNum);
      return tryNum;
    } catch (error) {
      const returnValue = await this.#printErrorAndRetry(error, this.#makeTryNum);
      return returnValue;
    }
  }

  async #printErrorAndRetry(error, retryFn) {
    OutputView.printMessage(error.message);
    const returnValue = await retryFn();
    return returnValue;
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError(ERROR_MESSAGES.ONLY_NUM);
    }

    if (number < TRY_RANGE.min || number > TRY_RANGE.max) {
      throw new AppError(ERROR_MESSAGES.INVALID_NUM_RANGE);
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.move(this.#makeRandomNumber0to9());
        OutputView.printCarCurrentDistance(car);
      });
      OutputView.printMessage(BLANK_STR);
    }
  }

  #calculateWinners(cars) {
    const MIN_DISTACNE = 0;
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));

    if (maxDistance !== MIN_DISTACNE) {
      const winners = cars.filter((car) => car.getDistance() === maxDistance);
      return { hasWinner: true, winners };
    }
    return { hasWinner: false, winners: [] };
  }

  #makeRandomNumber0to9() {
    return Math.floor(Math.random() * 10);
  }
}
