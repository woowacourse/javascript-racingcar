const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const Validation = require("../Validation");
const Race = require("../Model/Race");

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
      const carNames = carName.split(",").map((name) => name.trim());
      Validation.validateCarName(carNames);
      this.#carNames = carNames;
      this.inputNumberOfTrialHandler();
    } catch (error) {
      this.inputCarNameHandler();
    }
  }

  inputNumberOfTrialHandler() {
    InputView.readNumberOfTrial(this.numberOfTrialHandler.bind(this));
  }

  numberOfTrialHandler(numberOfTrial) {
    try {
      Validation.validateNumberOfTrial(numberOfTrial);
      const race = new Race(this.#carNames, numberOfTrial);
      this.drawHandler(race);
    } catch (error) {
      this.inputNumberOfTrialHandler();
    }
  }

  drawHandler(race) {
    const currentRace = race.start();
    const winner = race.makeResult();

    OutputView.drawProgress(this.#carNames, currentRace);
    OutputView.printResult(winner);
  }
}

module.exports = Controller;
