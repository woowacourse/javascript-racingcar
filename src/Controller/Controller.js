import CarRace from '../Model/CarRace';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';

const RESULT_MESSAGE = '실행 결과';
const BLANK_STR = '';

export default class Controller {
  #cars;

  #carRace = new CarRace();

  async run() {
    this.#cars = await this.#handleCar();
    const tryNum = await this.#handleTryNum();

    OutputView.printMessage(RESULT_MESSAGE);
    this.#runRace(tryNum);

    const calculValue = this.#carRace.calculateWinners(this.#cars);
    OutputView.printWinner(calculValue);
  }

  async #handleCar() {
    try {
      const carNames = await InputView.readCars();
      const cars = this.#carRace.validCars(carNames);
      return cars;
    } catch (error) {
      const returnValue = await this.#printErrorAndRetry(error, this.#handleCar);
      return returnValue;
    }
  }

  async #handleTryNum() {
    try {
      const tryNum = await InputView.readTry();
      this.#carRace.validTryNum(tryNum);
      return tryNum;
    } catch (error) {
      const returnValue = await this.#printErrorAndRetry(error, this.#handleTryNum);
      return returnValue;
    }
  }

  async #printErrorAndRetry(error, retryFn) {
    OutputView.printMessage(error.message);
    const returnValue = await retryFn.call(this);
    return returnValue;
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

  #makeRandomNumber0to9() {
    return Math.floor(Math.random() * 10);
  }
}
