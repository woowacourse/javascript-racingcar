import Racing from './Racing.js';
import readLineAsync from './utils/readLineAsync.js';
import validator from './utils/validator.js';
import Car from './Car.js';
import loopWhileValid from './utils/loopWhileValid.js';
import { GAME_MESSAGE, SEPERATOR } from './constants/systemMessages.js';

class App {
  async run() {
    const carList = await loopWhileValid(this.enterCarNames);
    const count = await loopWhileValid(this.enterCount);
    const racing = new Racing(carList, count);

    racing.start();
  }

  async enterCarNames() {
    const inputName = await readLineAsync(GAME_MESSAGE.ENTER_CAR_NAMES);
    const names = inputName.split(SEPERATOR);
    validator.carNames(names);

    return names.map((name) => new Car(name, 0));
  }

  async enterCount() {
    const count = await readLineAsync(GAME_MESSAGE.ENTER_COUNT);
    validator.count(count);

    return count;
  }
}

export default App;
