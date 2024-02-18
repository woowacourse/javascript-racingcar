import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import ScoreBoard from './domains/ScoreBoard.js';
import Game from './domains/Game.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import Validator from './validator/Validator.js';

class App {
  #initializedScoreBoard;
  #countOfAttempts;
  #gameResult;

  async play() {
    await asyncFunctionHandlerWithError(this.#readCarNames, this);
    await asyncFunctionHandlerWithError(this.#readCountOfAttempts, this);
    this.#gameStart();
    this.#printGameResult();
    this.#printWinner();
  }

  async #readCarNames() {
    const carNames = await InputView.inputCarNames();
    Validator.validateCarNames(carNames);

    const scoreBoard = new ScoreBoard(carNames);
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
    const finalWinnerArr = Game.getFinalWinner(this.#gameResult);
    OutputView.printWinner(finalWinnerArr);
  }
}
export default App;
