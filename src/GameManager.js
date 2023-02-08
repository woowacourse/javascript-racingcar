const Console = require('./utils/Console');
const { isValidCarNames } = require('./utils/Validation');
const Car = require('./Car');
class GameManager {
  #cars = [];
  play() {
    this.readCarNames();
  }

  handleCarNames(answer) {
    const names = answer.split(',');
    if (!isValidCarNames(names)) {
      Console.print('다시');
    } else {
      Console.print('통과');
      names.forEach((name) => {
        this.#cars.push(new Car(name));
      });
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
