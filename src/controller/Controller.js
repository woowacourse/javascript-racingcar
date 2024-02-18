import OPT from '../constant/options.js';
import RacingGame from '../model/RacingGame.js';
import prep from '../utils/preprocessor.js';
import validator from '../utils/validation/validator.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

class Controller {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingGame();
  }

  // eslint-disable-next-line class-methods-use-this
  async inputCarNames() {
    const carNamesInput = await inputView.readCarNames();

    const carNames = prep.process(carNamesInput, [
      [prep.splitStringByDelimiter, OPT.INPUT.carNameDelimiter],
      prep.trimEdgeWhitespaces
    ]);

    validator.carNamesValidation(carNames);

    return carNames;
  }

  // eslint-disable-next-line class-methods-use-this
  async inputTryCount() {
    const tryCountInput = await inputView.readTryCount();

    const tryCount = prep.process(tryCountInput, [
      prep.trimEdgeWhitespaces,
      prep.convertStringToNumber
    ]);

    validator.tryCountValidation(tryCount);

    return tryCount;
  }

  setCarNames(carNames) {
    this.#racingGame.setCars(carNames);
  }

  setTryCount(tryCount) {
    this.#racingGame.setTryCount(tryCount);
  }

  executeGame() {
    this.#racingGame.playRacing();
  }

  findWinners() {
    this.#racingGame.findWinners();
  }

  displayMiddleResults() {
    const middleResults = this.#racingGame.getMiddleResults();

    outputView.printMiddleResultTitle();
    outputView.printMiddleResults(middleResults);
  }

  displayFinalWinners() {
    const finalWinners = this.#racingGame.getFinalWinners();
    outputView.printFinalResult(finalWinners);
  }
}

export default Controller;
