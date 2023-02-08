const Console = require('./utils/Console');

class GameManager {
  play() {
    this.readCarNames();
  }

  handleCarNames(answer) {}

  readCarNames() {
    Console.read(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
      this.handleCarNames.bind(this)
    );
  }
}

module.exports = GameManager;
