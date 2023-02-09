const { Service } = require('./Service');
const { View } = require('./View');
const { Validator } = require('./Validator');

class Controller {
  #service;

  startGame() {
    this.askCarName();
  }

  askCarName() {
    View.input(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      this.handleCarName.bind(this)
    );
  }

  handleCarName(inputValue) {
    try {
      const names = inputValue.replace(/ /g, '').split(',');
      Validator.validateName(names);
      this.#service = new Service(names);
    } catch ({ message }) {
      View.output('ERROR: ' + message);
      return this.askCarName();
    }

    this.askTryCnt();
  }

  askTryCnt() {
    View.input('\n시도할 회수는 몇회인가요?\n', this.handleTryCnt.bind(this));
  }

  handleTryCnt(tryCount) {
    try {
      Validator.validateTryCnt(tryCount);
    } catch ({ message }) {
      View.output('ERROR: ' + message);
      return this.askTryCnt();
    }

    this.printResult(tryCount);
  }

  printResult(tryCount) {
    View.output('\n실행 결과');

    for (let i = 0; i < tryCount; i++) {
      const movingLog = this.#service.getMovingLog();
      View.output(movingLog, 'movingLog');
    }

    const winners = this.#service.getWinners();
    View.output(winners, 'winner');

    this.exitGame();
  }

  exitGame() {
    View.close();
  }
}

module.exports = { Controller };
