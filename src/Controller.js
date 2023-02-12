const { Service } = require("./Service");
const { View } = require("./View");
const { Validator } = require("./Validator");
const { RESULT_TYPE, MESSAGE } = require("./constants");

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
      const names = inputValue.replace(/ /g, "").split(",");
      Validator.validateName(names);
      this.#service = new Service(names);
    } catch ({ message }) {
      View.output(MESSAGE.ERROR(message));
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

    Array.from({length: tryCount}, ()=>0).forEach(()=>{
      const moveCnt = this.#service.getmoveCnt();
      View.output(moveCnt, RESULT_TYPE.MOVE_CNT);
    })
      
    const winners = this.#service.getWinners();
    View.output(winners, RESULT_TYPE.WINNERS);

    this.exitGame();
  }

  exitGame() {
    View.close();
  }
}

module.exports = { Controller };
