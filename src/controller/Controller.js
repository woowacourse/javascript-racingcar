const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../model/Car');

class Controller {
  #cars;
  #winningDistance;
  #histories;

  constructor() {
    this.#cars = [];
    this.#winningDistance = 0;
    this.#histories = [];
  }

  play() {
    OutputView.print('자동차 경주 게임을 시작합니다.');
    this.setCars();
  }

  async setCars() {
    const input = await InputView.readline(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
    );
    const carNames = input.split(',');
    this.makeCars(carNames);
  }

  async makeCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
    this.setWinningDistance();
  }

  async setWinningDistance() {
    this.#winningDistance = await InputView.readline('시도할 회수는 몇회인가요?');
    this.moveCars();
  }

  moveCars() {
    this.#cars.forEach((car) => car.move());
    this.#histories.push(
      this.#cars.map((car) => ({ name: car.getName(), distance: car.getDistance() })),
    );
    if (!this.#cars.some((car) => car.isFinish(this.#winningDistance))) {
      this.moveCars();
      return;
    }
    this.#showResult();
  }

  #showResult() {
    this.#histories.forEach((history) => {
      history.forEach((car) => {
        OutputView.print(`${car.name} : ${'-'.repeat(car.distance)}`);
      });
    });
    this.showWinners();
  }

  showWinners() {
    const winners = this.#cars.filter((car) => car.isFinish(this.#winningDistance));
    OutputView.print(`${winners.map((winner) => winner.getName()).join(',')}가 최종 우승했습니다.`);
  }
}
module.exports = Controller;
