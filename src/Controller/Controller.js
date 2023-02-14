const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const ValidateCarName = require("../utils/ValidateCarName");
const ValidateCountOfTrial = require("../utils/ValidateCountOfTrial");
const Race = require("../Domain/Race");

class Controller {
  #carNames;
  constructor() {
    this.inputCarNameHandler();
  }

  inputCarNameHandler() {
    InputView.readCarName(this.carNameHandler.bind(this));
  }

  carNameHandler(carName) {
    try {
      const carNames = carName.split(",").map((name) => name.trim());
      ValidateCarName.validate(carNames);
      this.#carNames = carNames;
      this.inputCountOfTrialHandler();
    } catch (error) {
      OutputView.printError(error);
      this.inputCarNameHandler();
    }
  }

  inputCountOfTrialHandler() {
    InputView.readCountOfTrial(this.countOfTrialHandler.bind(this));
  }

  countOfTrialHandler(countOfTrial) {
    try {
      ValidateCountOfTrial.validate(countOfTrial);
      const race = new Race(this.#carNames, countOfTrial);
      this.drawHandler(race);
    } catch (error) {
      OutputView.printError(error);
      this.inputCountOfTrialHandler();
    }
  }

  drawHandler(race) {
    const currentRace = race.start();
    const winners = race.makeResult();

    OutputView.drawProgress(this.#carNames, currentRace);
    OutputView.printResult(winners);
  }
}

module.exports = Controller;
