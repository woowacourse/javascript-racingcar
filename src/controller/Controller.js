import CarGame from '../model/CarGame.js';
import Preprocessor from '../utils/Preprocessor.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  async inputGameInfo() {
    await this.#retryAndErrorLogging(this.#inputCarNames.bind(this));
    await this.#retryAndErrorLogging(this.#inputTryCount.bind(this));
  }

  async #retryAndErrorLogging(inputFunction) {
    while (true) {
      try {
        await inputFunction();
        let a = b;
        break;
      } catch (error) {
        outputView.print(error.message);
      }
    }
  }

  async #inputCarNames() {
    const namesInput = await inputView.readCarNames();
    const carNames = Preprocessor.process(namesInput.split(OPTIONS.INPUT_DELIMITER), [
      Preprocessor.trimEdgeWhitespaces,
      Preprocessor.filterOutEmptyStrings
    ]);

    this.#carGame.setCars(carNames);
  }

  async #inputTryCount() {
    const tryCount = Number(await inputView.readTryCount());
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
