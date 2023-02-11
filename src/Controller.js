const { Service } = require('./Service');
const { Validator } = require('./Validator');
const { View } = require('./View');
const { MESSAGE, FORMATTING_TYPE } = require('./constants');

class Controller {
  #service;

  startGame() {
    this.askCarName();
  }

  askCarName() {
    View.input(MESSAGE.ASK_CAR_NAME, this.handleCarName.bind(this));
  }

  handleCarName(inputValue) {
    try {
      const names = inputValue.replace(/ /g, '').split(',');
      Validator.validateName(names);
      this.#service = new Service(names);
    } catch ({ message }) {
      View.output(message, FORMATTING_TYPE.ERROR);
      return this.askCarName();
    }

    this.askTryCnt();
  }

  askTryCnt() {
    View.input(MESSAGE.ASK_TRY_COUNT, this.handleTryCnt.bind(this));
  }

  handleTryCnt(tryCount) {
    try {
      Validator.validateTryCnt(tryCount);
    } catch ({ message }) {
      View.output(MESSAGE.ERROR(message));
      return this.askTryCnt();
    }

    this.printResult(tryCount);
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
