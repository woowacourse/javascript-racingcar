import readLineAsync from './utils/readLineAsync.js';
class App {
  #cars;
  #tryCount;

  async run() {
    this.#cars = await this.readCarNames();

    this.#tryCount = await this.readTryCount();
  }

  async readCarNames() {
    const answer = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    );

    const result = this.validateCars(this.#cars.split(','));
    console.log(result);
    if (!result) throw new Error('[ERROR] 유효한 차 이름 입력이 아님!');
    return answer.split(',');
  }

  async readTryCount() {
    const answer = await readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const result = this.validateTryCount(answer);
    console.log(result);
    if (!result) throw new Error('[ERROR] 숫자가 아님');
    return Number(answer);
  }

  validateCars(cars) {
    return (
      cars.every(name => name.length >= 1 && name.length <= 5) &&
      cars.length === new Set(cars).size
    );
  }

  validateTryCount(tryCount) {
    return /^[0-9]+$/.test(tryCount);
  }
}
export default App;
