import OPT from '../constant/options.js';
import CarGame from '../model/CarGame.js';
import ExceptionHandler from '../utils/error/ExceptionHandler.js';
import Prep from '../utils/Preprocessor.js';
import validator from '../utils/validation/validator.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  async inputGameInfo() {
    await ExceptionHandler.retryAsyncWithErrorLogging(this.#inputCarNames.bind(this));
    await ExceptionHandler.retryAsyncWithErrorLogging(this.#inputTryCount.bind(this));
  }

  async #inputCarNames() {
    const carNamesInput = await inputView.readCarNames();

    const carNames = Prep.process(carNamesInput, [
      [Prep.splitStringByDelimiter, OPT.INPUT.carNameDelimiter],
      Prep.trimEdgeWhitespaces
    ]);

    validator.carNamesValidation(carNames);

    this.#carGame.setCars(carNames);
  }

  async #inputTryCount() {
    const tryCountInput = await inputView.readTryCount();

    const tryCount = Prep.process(tryCountInput, [
      Prep.trimEdgeWhitespaces,
      Prep.convertStringToNumber
    ]);

    validator.tryCountValidation(tryCount);

    this.#carGame.setTryCount(tryCount);
  }

  playGame() {
    outputView.printCurrentResultTitle();

    const tryCount = this.#carGame.getTryCount();

    for (let i = 0; i < tryCount; i += 1) {
      this.#carGame.moveCars();
      this.#displayCurrentLocation();
    }
  }

  #displayCurrentLocation() {
    const carInfos = this.#carGame.getCurrentLocation();
    outputView.printCurrentLocation(carInfos);
  }

  findWinner() {
    const winners = this.#carGame.findWinners();
    outputView.printWinners(winners);
  }
}

export default Controller;
