const Console = require('./utils/Console');
const { isValidCarNames, isValidTryCount } = require('./utils/Validation');
const Car = require('./Car');
class GameManager {
  #cars = [];
  #tryCount = 0;
  play() {
    this.readCarNames();
  }

  handleTryCount(answer) {
    if (!isValidTryCount(answer)) {
      Console.print('다시');
    } else {
      this.#tryCount = +answer;
    }
  }

  readTryCount() {
    Console.read('시도할 회수는 몇회인가요?', this.handleTryCount.bind(this));
  }

  handleCarNames(answer) {
    const names = answer.split(',');
    if (!isValidCarNames(names)) {
      Console.print('다시');
    } else {
      names.forEach((name) => {
        this.#cars.push(new Car(name));
      });
      this.readTryCount();
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
