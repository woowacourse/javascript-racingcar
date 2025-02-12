import Racing from './Racing.js';
import { readLineAsync } from './utils/readLineAsync.js';
import { validator } from './utils/validator.js';
import Car from './Car.js';

class App {
  // 입출력 예시
  async run() {
    const carList = await this.enterCarNames();
    const count = await this.enterCount();
    const racing = new Racing(carList, count);

    racing.start();
  }

  async enterCarNames() {
    const inputName = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    );
    const names = inputName.split(',');
    validator.carNames(names);

    return names.map((name) => new Car(name, 0));
  }

  async enterCount() {
    const count = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validator.count(count);

    return count;
  }
}

export default App;
