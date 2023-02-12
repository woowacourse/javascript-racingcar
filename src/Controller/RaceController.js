const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Cars = require('../Models/Cars');
const TryCount = require('../Models/TryCount');

class RaceController {
  #cars;
  #tryCount;

  async play() {
    await this.handleOnCarNames();
    await this.handleOnTryCount();
    this.showRaceResult();
    this.showRaceWinner();
  }

  async handleOnCarNames() {
    const names = await InputView.readCarNames();
    try {
      this.#cars = new Cars(names);
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.handleOnCarNames();
    }
  }

  async handleOnTryCount() {
    const tryCount = await InputView.readTryCount();
    try {
      this.#tryCount = new TryCount(tryCount);
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.handleOnTryCount();
    }
  }

  showRaceResult() {
    OutputView.printResultMessage();
    const tryCount = this.#tryCount.getTryCount();
    for (let i = 0; i < tryCount; i += 1) {
      this.#cars.race();
      OutputView.printRaceResult(this.#cars.getRaceResult());
    }
  }

  showRaceWinner() {
    const winners = this.#cars.getWinners();
    OutputView.printWinners(winners);
  }
}

module.exports = RaceController;
