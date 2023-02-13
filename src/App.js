const CarManager = require('./domain/CarManager');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validator = require('./utils/Validator');

class App {
  constructor() {
    this.carManager = new CarManager(this);
  }

  play() {
    this.startWithInitialInputs();
  }

  startWithInitialInputs() {
    InputView.readCarNames((carNamesInput) => {
      if (this.isValidInput('carNames', carNamesInput, Validator)) {
        this.inputTryCount(carNamesInput);
        return;
      }

      this.startWithInitialInputs();
    });
  }

  inputTryCount(carNamesInput) {
    InputView.readTryCount((tryCountsInput) => {
      if (this.isValidInput('tryCounts', tryCountsInput, Validator)) {
        this.carManager.createInitialCars(carNamesInput.split(','));
        this.printGameResult(tryCountsInput);
        return;
      }

      this.inputTryCount(carNamesInput);
    });
  }

  isValidInput(type, inputValue, validator) {
    try {
      if (type === 'carNames') validator.validateNameInput(inputValue);
      if (type === 'tryCounts') validator.validateTryCountsInput(inputValue);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return false;
    }
  }

  printGameResult(tryCountsInput) {
    this.printRaceProgress(this.carManager.accumulatedProgress(parseInt(tryCountsInput)));
    this.printWinners(this.carManager.getWinners());
  }

  printRaceProgress(accumulatedProgress) {
    accumulatedProgress.forEach((caseProgress) => {
      this.printSingleCaseResult(caseProgress);
    });
  }

  printSingleCaseResult(cars) {
    OutputView.printRaceProgress(cars);
  }

  printWinners(winners) {
    OutputView.printWinners(winners);
  }
}

module.exports = App;
