import Cars from '../domains/Cars.js';
import Winner from '../domains/Winner.js';
import CarNameValidator from '../validators/CarNameValidator.js';
import TryCountValidator from '../validators/TryCountValidator.js';

class RaceController {
  #inputView;
  #outputView;

  constructor(views) {
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
  }

  async race() {
    const carNames = await this.#initCarNames();
    const tryCount = await this.#initTryCount();

    const cars = new Cars(carNames);

    this.#processRacing(cars, tryCount);
    this.#processWinner(cars);
  }

  async #initCarNames() {
    let isCarNamesValid = false;

    while (isCarNamesValid) {
      try {
        const carNames = await this.#inputView.getCarNames();
        const parsedCarNames = carNames.split(',').map((carName) => carName.trim());
        new CarNameValidator().validateNames(parsedCarNames);
        isCarNamesValid = true;
        return parsedCarNames;
      } catch (error) {
        this.#outputView.printValue(error.message + '\n');
      }
    }
  }

  async #initTryCount() {
    let isTryCountValid = false;

    while (isTryCountValid) {
      try {
        const tryCount = await this.#inputView.getTryCount();
        const parsedTryCount = Number(tryCount);
        new TryCountValidator().validateNumber(parsedTryCount);
        isTryCountValid = true;
        return parsedTryCount;
      } catch (error) {
        this.#outputView.printValue(error.message + '\n');
      }
    }
  }

  #processRacing(cars, tryCount) {
    this.#outputView.printResultHeader();
    const carList = cars.cars;

    for (let i = 0; i < tryCount; i++) {
      cars.moveCars();
      this.#outputView.printRaceResult(carList);
      this.#outputView.printNewLine();
    }
  }

  #processWinner(cars) {
    const maxPosition = cars.getMaxPosition();
    const carList = cars.cars;

    this.#outputView.printWinners(new Winner().getWinners(carList, maxPosition));
  }
}

export default RaceController;
