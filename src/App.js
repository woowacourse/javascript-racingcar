import { GAME_MESSAGE } from './constants/systemMessages.js';
import Racing from './domain/Racing.js';
import loopWhileValid from './utils/loopWhileValid.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const carNames = await loopWhileValid(InputView.enterCarNames);
    const count = await loopWhileValid(InputView.enterCount);
    const racing = new Racing(carNames, count);

    this.race(racing, count);
  }

  race(racing, count) {
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
