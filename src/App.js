import { readLineAsync } from './utils/readLineAsync.js';
import { splitString } from './utils/separator.js';
import { checkCarNameLength, checkCarNameDuplicate, checkIsEmpty, checkCarCount } from './validates/carValidates.js';

class App {
  async run() {
    const carNamesInput = await readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n');
    checkIsEmpty(carNamesInput);
    const carNames = splitString(carNamesInput);
    checkCarNameLength(carNames);
    checkCarCount(carNames);
    checkCarNameDuplicate(carNames);

    const tryCountInput = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
