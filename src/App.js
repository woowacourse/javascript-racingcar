const RacingGame = require('./RacingGame');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #racingGame;
  #tryCount;

  async play() {
    await this.inputCarNames();
    await this.inputTryCount();

    this.race(this.#tryCount);
    this.showRaceWinners(this.#racingGame.getWinners());
  }

  async inputCarNames() {
    const carNamesInput = await InputView.readCarNames();
    // TODO: validate
    this.#racingGame = new RacingGame(carNamesInput.split(','));
  }

  async inputTryCount() {
    const tryCountInput = await InputView.readTryCount();
    // TODO: validate
    this.#tryCount = parseInt(tryCountInput);
  }

  race(tryCount) {
    Array.from({ length: tryCount }, () => {
      this.#racingGame.progressAllCars();
      this.showRaceProgress(this.#racingGame.getCars());
    });
  }

  showRaceProgress(cars) {
    OutputView.printRaceProgress(cars);
  }

  showRaceWinners(winners) {
    OutputView.printWinners(winners);
  }
}

new App().play();

module.exports = App;
