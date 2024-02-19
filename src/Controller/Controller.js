import CarRace from '../Domain/CarRace';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';

const RESULT_MESSAGE = '실행 결과';
const BLANK_STR = '';

export default class Controller {
  #carRace = new CarRace();

  async run() {
    await this.#handleCar();
    await this.#handleTryNum();

    OutputView.printMessage(RESULT_MESSAGE);
    this.#runRace();

    const calculValue = this.#carRace.calculateWinners();
    OutputView.printWinner(calculValue);
  }

  async #handleCar() {
    try {
      const carNames = await InputView.readCars();
      this.#carRace.setCarsByCarNames(carNames);
    } catch (error) {
      await this.#printErrorAndRetry(error, this.#handleCar);
    }
  }

  async #handleTryNum() {
    try {
      const tryNum = await InputView.readTry();
      this.#carRace.setTryNum(tryNum);
    } catch (error) {
      await this.#printErrorAndRetry(error, this.#handleTryNum);
    }
  }

  async #printErrorAndRetry(error, retryFn) {
    OutputView.printMessage(error.message);
    await retryFn.call(this);
  }

  #runRace() {
    for (let i = 0; i < this.#carRace.getTryNum(); i += 1) {
      this.#carRace.getCars().forEach((car) => {
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
