import OPT from '../constant/options.js';
import CarGame from '../model/CarGame.js';
import Prep from '../utils/Preprocessor.js';
import validator from '../utils/validation/validator.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class Controller {
  #carGame;

  constructor() {
    this.#carGame = new CarGame();
  }

  // eslint-disable-next-line class-methods-use-this
  async inputCarNames() {
    const carNamesInput = await inputView.readCarNames();

    const carNames = Prep.process(carNamesInput, [
      [Prep.splitStringByDelimiter, OPT.INPUT.carNameDelimiter],
      Prep.trimEdgeWhitespaces
    ]);

    validator.carNamesValidation(carNames);

    return carNames;
  }

  // eslint-disable-next-line class-methods-use-this
  async inputTryCount() {
    const tryCountInput = await inputView.readTryCount();

    const tryCount = Prep.process(tryCountInput, [
      Prep.trimEdgeWhitespaces,
      Prep.convertStringToNumber
    ]);

    validator.tryCountValidation(tryCount);

    return tryCount;
  }

  setCarNames(carNames) {
    this.#carGame.setCars(carNames);
  }

  setTryCount(tryCount) {
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
