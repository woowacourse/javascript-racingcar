import { readLineAsync } from './utils/readLineAsync.js';
import { splitString } from './utils/separator.js';
import { checkCarNameLength, checkCarNameDuplicate } from './validates/carValidates.js';

class App {
  async run() {
    const carNamesInput = await readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n');
    const carNames = splitString(carNamesInput);

    checkCarNameLength(carNames);
    checkCarNameDuplicate(carNames);
  }
}

export default App;
