const RacingGame = require('./RacingGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #racingGame;

  async setup() {
    const carNames = await InputView.repeatInput(InputView.getCarNames);
    const attempts = await InputView.repeatInput(InputView.getAttempts);
    this.#racingGame = new RacingGame(carNames, attempts);
  }

  async play() {
    await this.setup();
    OutputView.printResultMessage();
    OutputView.printResult(this.#racingGame.getGameStatus());
    while (this.#racingGame.canMove()) {
      this.#racingGame.moveAllCars();
      OutputView.printResult(this.#racingGame.getGameStatus());
    }
    OutputView.printWinners(this.#racingGame.findWinner());
  }
}

module.exports = App;
