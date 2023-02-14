const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validation = require('./Validation');
const Race = require('./domain/Race');

class RaceController {
  #carNames;
  constructor() {
    this.inputCarNameHandler();
  }

  inputCarNameHandler() {
    InputView.readCarName(this.carNameHandler);
  }

  carNameHandler = (carName) => {
    try {
      const carNames = carName.split(',').map((name) => name.trim());
      Validation.validateCarName(carNames);
      this.#carNames = carNames;
      this.inputTryCountHandler();
    } catch (error) {
      this.inputCarNameHandler();
    }
  };

  inputTryCountHandler() {
    InputView.readTryCount(this.tryCountHandler);
  }

  tryCountHandler = (tryCount) => {
    try {
      Validation.validateTryCount(tryCount);
      const race = new Race(this.#carNames, tryCount);
      this.drawHandler(race);
    } catch (error) {
      this.inputTryCountHandler();
    }
  };

  drawHandler(race) {
    const currentRace = race.start();
    const winner = race.makeResult();

    OutputView.drawProgress(this.#carNames, currentRace);
    OutputView.printResult(winner);
  }
}

module.exports = RaceController;
