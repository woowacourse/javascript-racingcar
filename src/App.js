import readLineAsync from './utils/readLineAsync.js';
import getRandomNumberInRange from './utils/getRandomNumberInRange.js';

class App {
  #carNames;
  #tryCount;

  async run() {
    this.#carNames = await this.readCarNames();

    this.#tryCount = await this.readTryCount();
    const result = this.play();
    this.printResult(result);
  }

  async readCarNames() {
    const answer = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    ).then(names => names.split(','));

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

  printResult(result, isLineBreak = true) {
    if (isLineBreak) console.log('\n');
    console.log('실행결과\n');

    for (let nowTry = 0; nowTry < this.#tryCount; nowTry++) {
      this.#carNames.forEach(name => {
        console.log(`${name} : ${'-'.repeat(result[name][nowTry])}`);
      });
      console.log('\n');
    }

    const maxPosition = Math.max(
      ...Object.values(result).map(array => array[this.#tryCount - 1])
    );
    const winners = Object.keys(result).filter(
      name => result[name][this.#tryCount - 1] === maxPosition
    );
    console.log(`최종 우승자: ${winners.join(', ')}`);
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
