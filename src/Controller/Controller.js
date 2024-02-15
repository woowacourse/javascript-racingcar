import Car from "../Model/Car.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import AppError from "../utils/Error.js";

export default class Controller {
  #cars;

  #input = new InputView();

  #output = new OutputView();

  async run() {
    this.#cars = await this.#promptCarNames();
    const tryNum = await this.#promptTry();

    this.#runRace(tryNum);
    this.#output.printMessage("실행 결과");

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

      return Number(tryNum);
    } catch (error) {
      this.#output.printMessage(error.message);
      await this.#promptTry();
    }
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError("숫자 값만 입력해주세요.");
    }
    if (number < 1 || number > 200) {
      throw new AppError("3초과 200미만의 숫자만 입력해주세요.");
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i++) {
      this.#cars.forEach((car) => {
        car.move(this.#makeRandomNumber());
        this.#output.printCarCurrentDistance(car);
      });
      this.#output.printMessage("");
    }
  }

  #makeRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  calculateWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
    if (maxDistance) {
      const winners = cars.filter((car) =>
        car.getDistance() === maxDistance ? true : false
      );
      return { hasWinner: true, maxDistance, winners };
    }
    return { hasWinner: false, maxDistance, winners: [] };
  }
}
