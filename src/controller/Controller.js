// domain
import CarGame from '../domain/CarGame.js';
// view
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
// constants
import { OPTION } from '../constants/System.js';
// utils
import Preprocessor from '../utils/Preprocessor.js';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  async inputGameInfo() {
    await this.#retryAndErrorLogging(this.#inputCarNames.bind(this));
    await this.#retryAndErrorLogging(this.#inputTryCount.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  async #retryAndErrorLogging(inputFunction) {
    while (true) {
      try {
        await inputFunction();
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #inputCarNames() {
    const namesInput = await InputView.readCarNames();
    const carNames = Preprocessor.process(
      namesInput.split(OPTION.INPUT_SPLITER),
      [Preprocessor.trimEdgeWhitespaces, Preprocessor.filterOutEmptyStrings],
    );

    this.#carGame.setCars(carNames);
  }

  async #inputTryCount() {
    const tryCount = Number(await InputView.readTryCount());
    this.#carGame.setTryCount(tryCount);
  }

  playGame() {
    OutputView.printCurrentResultTitle();

    const tryCount = this.#carGame.getTryCount();

    for (let i = 0; i < tryCount; i += 1) {
      this.#carGame.moveCars();
      this.#displayCurrentLocation();
    }
  }

  #displayCurrentLocation() {
    const carInfos = this.#carGame.getCurrentLocation();
    OutputView.printCurrentLocation(carInfos);
  }

  findWinner() {
    const winners = this.#carGame.findWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
