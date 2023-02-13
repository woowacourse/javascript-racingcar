const RacingGame = require('./domain/RacingGame');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const CarNamesInputValidator = require('./domain/validators/CarNamesInputValidator');
const TryCountInputValidator = require('./domain/validators/TryCountInputValidator');

class App {
  #carNames;
  #tryCount;
  #racingGame;

  async play() {
    await this.inputCarNames();
    await this.inputTryCount();

    this.#racingGame = new RacingGame(this.#carNames);
    this.race(this.#tryCount);
    this.showRaceWinners(this.#racingGame.getWinners());
  }

  async inputCarNames() {
    try {
      const carNamesInput = await InputView.readCarNames();
      this.validateInput(carNamesInput, CarNamesInputValidator);
      this.#carNames = carNamesInput.split(',');
    } catch (error) {
      await this.inputCarNames();
    }
  }

  async inputTryCount() {
    try {
      const tryCountInput = await InputView.readTryCount();
      this.validateInput(tryCountInput, TryCountInputValidator);
      this.#tryCount = parseInt(tryCountInput);
    } catch (error) {
      await this.inputTryCount();
    }
  }

  validateInput(inputValue, validator) {
    try {
      validator.validate(inputValue);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      throw error;
    }
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
