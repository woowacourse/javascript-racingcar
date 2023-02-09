const { Service } = require('./Service');
const { Validator } = require('./Validator');
const { View } = require('./View');

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

  handleTryCnt(cnt) {
    try {
      Validator.validateTryCnt(cnt);
    } catch ({ message }) {
      View.output('ERROR: ' + message);
      return this.askTryCnt();
    }
    this.printResult(cnt);
  }

  printResult(cnt) {
    View.output('\n실행 결과');
    const movingLog = this.#service.getMovingLog(cnt);
    View.output(movingLog);
    const winners = this.#service.getWinners();
    View.output(winners);

    this.exitGame();
  }

  exitGame() {
    View.close();
  }
}

module.exports = { Controller };
