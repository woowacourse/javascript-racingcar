import Racing from './domain/Racing.js';
import loopWhileValid from './utils/loopWhileValid.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const carList = await loopWhileValid(InputView.enterCarNames);
    const count = await loopWhileValid(InputView.enterCount);
    const racing = new Racing(carList, count);

    racing.start();
  }
}

export default App;
