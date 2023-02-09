const Console = require('./utils/Console');
const { isValidCarNames, isValidTryCount } = require('./utils/Validation');
const Car = require('./Car');
const { pickRandomNumber } = require('./utils/RandomGenerator');
class GameManager {
  #cars = [];
  #tryCount = 0;

  isForward() {
    return pickRandomNumber() >= 4;
  }

  moveCars() {
    this.#cars.forEach((car) => {
      car.move(this.isForward());
    });
  }

  printCars() {
    this.#cars.forEach((car) => {
      car.print();
    });
    Console.print('');
  }

  tryMoveCars() {
    Console.print('');
    Console.print('실행 결과');
    for (let i = 0; i < this.#tryCount; i++) {
      this.moveCars();
      this.printCars();
    }
  }

  judgeWinners() {
    const cars = [...this.#cars];
    cars.sort((a, b) => b.getPosition() - a.getPosition());
    const max = cars[0].getPosition();
    const winners = cars
      .filter((car) => car.getPosition() === max)
      .map((car) => car.getName());
    console.log(`${winners.join(', ')}가 최종 우승했습니다.`);
  }

  handleTryCount(answer) {
    if (!isValidTryCount(answer)) {
      Console.print('다시');
    } else {
      this.#tryCount = +answer;
      this.tryMoveCars();
      this.judgeWinners();
    }
  }

  readTryCount() {
    Console.read('시도할 회수는 몇회인가요?', this.handleTryCount.bind(this));
  }

  handleCarNames(answer) {
    const names = answer.split(',');
    try {
      if (!isValidCarNames(names)) {
        throw new Error('[ERROR] 잘못 된 값을 입력했습니다.');
      }
      names.forEach((name) => {
        this.#cars.push(new Car(name));
      });
      this.readTryCount();
    } catch (error) {
      Console.print(error.message);
      this.readCarNames();
    }
  }

  readCarNames() {
    Console.read(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
      this.handleCarNames.bind(this)
    );
  }

  play() {
    this.readCarNames();
  }
}

module.exports = GameManager;
