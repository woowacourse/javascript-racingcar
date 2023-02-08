const Console = require('./utils/Console');
const { isValidCarNames } = require('./utils/Validation');

class GameManager {
  play() {
    this.readCarNames();
  }

  handleCarNames(answer) {
    const names = answer.split(',');
    if (!isValidCarNames(names)) {
      Console.print('다시');
    } else {
      Console.print('통과');
    }
  }

  readCarNames() {
    Console.read(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
      this.handleCarNames.bind(this)
    );
  }
}

module.exports = GameManager;
