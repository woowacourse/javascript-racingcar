const RacingGame = require('./domain/RacingGame');
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
    this.playRacingGame();
    this.showWinners();
  }

  playRacingGame() {
    if (!this.#racingGame) return;

    OutputView.printResultMessage();
    OutputView.printResult(this.#racingGame.getGameStatus());

    while (this.#racingGame.canMove()) {
      this.#racingGame.moveAllCars();
      OutputView.printResult(this.#racingGame.getGameStatus());
    }
  }

  showWinners() {
    if (!this.#racingGame) return;

    const maxPosition = this.#racingGame.findMaxPosition();
    const winners = this.#racingGame.findCarsAtPosition(maxPosition);

    OutputView.printWinners(winners);
  }
}

module.exports = App;
