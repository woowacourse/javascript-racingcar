import Racing from './Racing.js';
import readLineAsync from './utils/readLineAsync.js';
import InputValidator from './utils/InputValidator.js';
import Car from './Car.js';
import loopWhileValid from './utils/loopWhileValid.js';
import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';

class App {
  async run() {
    const carList = await loopWhileValid(this.enterCarNames);
    const count = await loopWhileValid(this.enterCount);
    const racing = new Racing(carList, count);

    racing.start();
  }

  async enterCarNames() {
    const inputName = await readLineAsync(GAME_MESSAGE.ENTER_CAR_NAMES);
    const names = inputName.split(SEPARATOR);
    InputValidator.carNames(names);

    return names.map((name) => new Car(name, 0));
  }

  async enterCount() {
    const count = await readLineAsync(GAME_MESSAGE.ENTER_COUNT);
    InputValidator.count(count);

    return count;
  }
}

export default App;
