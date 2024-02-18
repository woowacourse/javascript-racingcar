import InputView from './view/InputView';
import Validator from './domain/models/Validator';
import OutputView from './view/OutputView';
import ScoreBoard from './domain/models/ScoreBoard';
import Game from './domain/models/Game';

class App {
  #scoreBoard;

  #count;

  #gameResult;

  async play() {
    await this.#inputCarNames();
    await this.#inputCountOfAttempt();
    this.gameStart();
    this.printGameResult();
  }

  gameStart() {
    const game = new Game(this.#scoreBoard, this.#count);
    this.#gameResult = game.getGameResult();
  }

  printGameResult() {
    OutputView.printStartGame();
    OutputView.printResult(this.#gameResult);
    OutputView.printWinner(this.#gameResult, this.#count);
  }

  async #inputCarNames() {
    const carNames = await this.#getInputCarNames();
    this.#createScoreBoard(carNames);
    return this.#scoreBoard;
  }

  async #getInputCarNames() {
    try {
      const carNames = await InputView.inputCarNames();
      return carNames;
    } catch (error) {
      console.error(error.message);
      return this.#getInputCarNames();
    }
  }

  #createScoreBoard(carNames) {
    const scoreBoard = new ScoreBoard(carNames);
    this.#scoreBoard = scoreBoard.getScoreBoard();
  }

  async #inputCountOfAttempt() {
    const count = await this.#getValidatedCount();
    this.#setCount(count);
    return this.#count;
  }

  async #getValidatedCount() {
    try {
      const count = await InputView.inputCountOfAttempt();
      Validator.validateCountOfAttempt(count);
      return count;
    } catch (error) {
      console.error(error.message);
      return this.#getValidatedCount();
    }
  }

  #setCount(count) {
    this.#count = count;
  }
}
export default App;
