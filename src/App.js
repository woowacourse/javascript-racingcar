import { GAME_MESSAGE } from './constants/systemMessages.js';
import Racing from './domain/Racing.js';
import loopWhileValid from './utils/loopWhileValid.js';
import InputView from './view/InputView.js';
import Printer from './view/printMessage.js';

class App {
  async run() {
    const carList = await loopWhileValid(InputView.enterCarNames);
    const count = await loopWhileValid(InputView.enterCount);
    const racing = new Racing(carList, count);

    Printer.printMessage(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < count; i++) {
      racing.raceOnce();
      Printer.printRaceStatus(racing);
      Printer.printBlank();
    }
    Printer.printRaceWinner(racing);
  }
}

export default App;
