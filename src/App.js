import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';
import Racing from './domain/Racing.js';
import loopWhileValid from './utils/loopWhileValid.js';
import InputValidator from './view/InputValidator.js';
import InputView from './domain/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const carNames = await loopWhileValid(this.#getCarNames);
    const count = await loopWhileValid(this.#getCount);
    const racing = new Racing(carNames, count);

    this.#race(racing, count);
  }

  async #getCarNames() {
    const carNamesInput = await InputView.enterCarNames();
    const names = carNamesInput.split(SEPARATOR);
    InputValidator.carNames(names);
    return names;
  }

  async #getCount() {
    const countInput = await InputView.enterCount();
    InputValidator.count(countInput);
    return countInput;
  }

  #race(racing, count) {
    OutputView.printMessage(GAME_MESSAGE.RACING_RESULT);

    for (let i = 0; i < count; i++) {
      racing.raceOnce();
      racing.carList.forEach((car) => {
        const { name, position } = car.getCarStatus();
        OutputView.printRaceStatus(name, position);
      });
      OutputView.printBlank();
    }

    const winner = racing.getWinner();
    OutputView.printRaceWinner(winner);
  }
}

export default App;
