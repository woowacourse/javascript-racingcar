const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Validation');
const Race = require('../Model/Race');

class Controller {
  #carNames;
  init() {
    this.inputCarNameHandler();
  }

  inputCarNameHandler() {
    InputView.readCarName(this.carNameHandler.bind(this));
  }

  carNameHandler(carName) {
    try {
      const carNames = carName.split(',').map((name) => name.trim());
      Validation.validateCarName(carNames);
      this.#carNames = carNames;
      this.inputTryCountHandler();
    } catch (error) {
      this.inputCarNameHandler();
    }
  }

  inputTryCountHandler() {
    InputView.readTryCount(this.tryCountHandler.bind(this));
  }

  tryCountHandler(tryCount) {
    try {
      Validation.validateTryCount(tryCount);
      const race = new Race(this.#carNames, tryCount);
      this.drawHandler(race);
    } catch (error) {
      this.inputTryCountHandler();
    }
  }

  drawHandler(race) {
    const currentRace = race.start();
    const winner = race.makeResult();

    OutputView.drawProgress(this.#carNames, currentRace);
    OutputView.printResult(this.#carNames, winner);
  }
}

module.exports = Controller;
