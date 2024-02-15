import Car from "../Model/Car.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import AppError from "../utils/Error.js";

const RESULT_MESSAGE = "실행 결과";
const ERROR_MESSAGES = Object.freeze({
  onlyNum: "숫자 값만 입력해주세요.",
  invalidNumRange: "1 이상 200미만의 숫자만 입력해주세요.",
});
const TRY_RANGE = Object.freeze({ min: 1, max: 200 });

export default class Controller {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    this.#cars = await this.#promptCarNames();
    const tryNum = await this.#promptTry();

    this.#runRace(tryNum);
    this.#output.printMessage(RESULT_MESSAGE);

    const calculValue = this.calculateWinners(this.#cars);
    this.#output.printWinner(calculValue);
  }

  async #promptCarNames() {
    try {
      const carNames = await this.#input.readCars();
      return carNames.map((name) => new Car(name));
    } catch (error) {
      this.#output.printMessage(error.message);
      await this.#promptCarNames();
    }
  }

  async #promptTry() {
    try {
      const tryInput = await this.#input.readTry();
      const tryNum = Number(tryInput);
      this.#checkTryNum(tryNum);

      return tryNum;
    } catch (error) {
      this.#output.printMessage(error.message);
      await this.#promptTry();
    }
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError(ERROR_MESSAGES.onlyNum);
    }

    if (number < TRY_RANGE.min || number > TRY_RANGE.max) {
      throw new AppError(ERROR_MESSAGES.invalidNumRange);
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.move(this.#makeRandomNumber1to10());
        this.#output.printCarCurrentDistance(car);
      });
      this.#output.printMessage("");
    }
  }

  #makeRandomNumber1to10() {
    return Math.floor(Math.random() * 10);
  }

  calculateWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
    if (maxDistance) {
      const winners = cars.filter((car) =>
        car.getDistance() === maxDistance ? true : false
      );
      return { hasWinner: true, winners };
    }
    return { hasWinner: false, winners: [] };
  }
}
