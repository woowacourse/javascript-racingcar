import CarManager from '../CarManager.js';
import readLineAsync from '../views/InputView.js';

class Controller {
  constructor() {
    this.carManager = new CarManager();
  }

  async process() {
    const carNames = await readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n');
    this.carManager.createCars(carNames);
    const attempts = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.carManager.race(attempts);
  }
}

export default Controller;
