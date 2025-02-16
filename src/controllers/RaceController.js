import Cars from "../domain/Cars.js";
import Winner from "../domain/Winner.js";
import CarNameValidator from "../validators/CarNameValidator.js";
import TryCountValidator from "../validators/TryCountValidator.js";

class RaceController {
  #inputView;
  #outputView;

  constructor(views) {
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
  }

  async race() {
    const parsedCarNames = await this.#initCarNames();
    const parsedTryCount = await this.#initTryCount();

    const cars = new Cars(parsedCarNames);

    this.#processRacing(cars, parsedTryCount);
    this.#processWinner(cars);
  }

  async #initCarNames() {
    while (true) {
      try {
        const carNames = await this.#inputView.getCarNames();
        const parsedCarNames = carNames
          .split(",")
          .map((carName) => carName.trim());
        new CarNameValidator().valiateNames(parsedCarNames);
        return parsedCarNames;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async #initTryCount() {
    while (true) {
      try {
        const tryCount = await this.#inputView.getTryCount();
        const parsedTryCount = Number(tryCount);
        new TryCountValidator().validateNumber(parsedTryCount);

        return parsedTryCount;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  #processRacing(cars, parsedTryCount) {
    this.#outputView.printResultHeader();

    const carList = cars.getCars();

    Array.from({ length: parsedTryCount }).forEach(() => {
      cars.moveCars();
      this.#outputView.printRaceResult(carList);
      this.#outputView.printNewLine();
    });
  }

  #processWinner(cars) {
    const maxPosition = cars.getMaxPosition();
    const carList = cars.getCars();

    this.#outputView.printWinners(
      new Winner().getWinners(carList, maxPosition),
    );
  }
}

export default RaceController;
