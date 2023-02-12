const { Service } = require('./Service');
const { Validator } = require('./Validator');
const { View } = require('./View');
const { MESSAGE, FORMATTING_TYPE } = require('./constants');

class Controller {
  #service;

  startGame() {
    this.inputCarName();
  }

  inputCarName() {
    View.input(MESSAGE.ASK_CAR_NAME, this.onInputCarName.bind(this));
  }

  onInputCarName(inputValue) {
    try {
      const names = inputValue.replace(/ /g, '').split(',');
      Validator.validateName(names);
      this.#service = new Service(names);
    } catch ({ message }) {
      View.output(message, FORMATTING_TYPE.ERROR);
      return this.inputCarName();
    }

    this.inputTryCount();
  }

  inputTryCount() {
    View.input(MESSAGE.ASK_TRY_COUNT, this.onInputTryCount.bind(this));
  }

  onInputTryCount(inputValue) {
    try {
      Validator.validateTryCnt(inputValue);
    } catch ({ message }) {
      View.output(MESSAGE.ERROR(message));
      return this.inputTryCount();
    }

    this.printResult(inputValue);
  }

  printResult(tryCount) {
    View.output(MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      const movingLog = this.#service.getMovingLog();
      View.output(movingLog, FORMATTING_TYPE.MOVING_LOG);
    }
    const winners = this.#service.getWinners();
    View.output(winners, FORMATTING_TYPE.WINNERS);

    this.exitGame();
  }

  exitGame() {
    View.close();
  }
}

module.exports = { Controller };
