import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import ScoreBoard from './domains/ScoreBoard.js';
import Game from './domains/Game.js';
import retryAsyncFunctionOnError from './utils/retryAsyncFunctionOnError.js';
import Validator from './validator/Validator.js';
import fillEmptyCarNames from './services/fillEmptyCarNames.js';

class App {
  #initializedScoreBoard;
  #countOfAttempts;
  #gameResult;

  async play() {
    await retryAsyncFunctionOnError(this.#readCarNames, this);
    await retryAsyncFunctionOnError(this.#readCountOfAttempts, this);
    this.#gameStart();
    this.#printGameResult();
    this.#printWinner();
  }

  async #readCarNames() {
    const carNames = await InputView.inputCarNames();
    const formattedCarNames = fillEmptyCarNames(carNames);
    Validator.validateCarNames(formattedCarNames);
    const scoreBoard = new ScoreBoard(formattedCarNames);
    this.#initializedScoreBoard = scoreBoard.getScoreBoard();

    OutputView.divideLine();
  }

  async #readCountOfAttempts() {
    const countOfAttempts = await InputView.inputCountOfAttempt();
    Validator.validateCountOfAttempts(countOfAttempts);
    this.#countOfAttempts = countOfAttempts;

    OutputView.divideLine();
  }

  #gameStart() {
    const game = new Game(this.#initializedScoreBoard, this.#countOfAttempts);
    this.#gameResult = game.getGameResult();
  }

  #printGameResult() {
    OutputView.printStartGame();
    OutputView.printResult(this.#gameResult);
  }

  #printWinner() {
    const finalWinners = Game.getFinalWinners(this.#gameResult);
    OutputView.printWinner(finalWinners);
  }
}
export default App;
