const { View } = require("./View");

class Controller {
  startGame() {
    this.askCarName();
  }

  askCarName() {
    View.input(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
      this.handleCarName
    );
  }

  handleCarName(names) {
    console.log(names);
  }
}

module.exports = { Controller };
