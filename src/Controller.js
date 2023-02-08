const { Validator } = require("./Validator");
const { View } = require("./View");

class Controller {
  #service;

  startGame() {
    this.askCarName();
  }

  askCarName() {
    View.input(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
      this.handleCarName.bind(this)
    );
  }

  handleCarName(names) {
    try {
      Validator.validateName(names);
      //this.#service = new Service(names.split(","));
    } catch ({ message }) {
      View.output("ERROR: " + message);
      return this.askCarName();
    }
    this.askTryCnt();
  }

  askTryCnt() {
    View.input("시도할 회수는 몇회인가요?\n", this.handleTryCnt.bind(this));
  }

  handleTryCnt(cnt) {
    try {
      Validator.validateTryCnt(cnt);
    } catch ({ message }) {
      View.output("ERROR: " + message);
      return this.askTryCnt();
    }
  }
}

module.exports = { Controller };
