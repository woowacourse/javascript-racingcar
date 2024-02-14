import readLineAsync from './utils/readLineAsync.js';
import getRandomNumberInRange from './utils/getRandomNumberInRange.js';

class App {
  #carNames = [1232, 23];
  #tryCount = 5;

  async run() {
    // this.#carNames = await this.readCarNames();

    // this.#tryCount = await this.readTryCount();
    this.play();
  }

  async readCarNames() {
    const answer = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    ).split(',');

    const result = this.validateCars(answer);
    if (!result) throw new Error('[ERROR] 유효한 차 이름 입력이 아님!');
    return answer;
  }

  async readTryCount() {
    const answer = await readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const result = this.validateTryCount(answer);
    if (!result) throw new Error('[ERROR] 숫자가 아님');
    return Number(answer);
  }

  play() {
    const result = this.#carNames.reduce((obj, name) => {
      obj[name] = new Array(this.#tryCount).fill(null).reduce(array => {
        if (array.length === 0)
          array.push(getRandomNumberInRange(0, 9) >= 4 ? 1 : 0);
        else
          array.push(
            array[array.length - 1] +
              (getRandomNumberInRange(0, 9) >= 4 ? 1 : 0)
          );
        return array;
      }, []);
      return obj;
    }, {});
    return result;
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
