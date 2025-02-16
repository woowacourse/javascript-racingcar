import Racing from './domain/Racing.js';
import Car from './domain/Car.js';
import loopWhileValid from './utils/retryUntilSuccess.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const rawCarList = await loopWhileValid(InputView.enterCarNames);
    const carList = rawCarList.map((name) => new Car(name, 0));
    const count = await loopWhileValid(InputView.enterCount);
    const racing = new Racing(carList);

    OutputView.printResultMessage();
    for (let i = 0; i < count; i++) {
      racing.raceOnce().forEach((car) => OutputView.printCarState(car));
      OutputView.printNewLine();
    }
    OutputView.printWinner(racing.getWinner());
  }
}

export default App;
