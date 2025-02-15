import splitInput from './utils/splitInput.js';
import NameValidator from './utils/validator/NameValidator.js';
import CountValidator from './utils/validator/CountValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import parseToNumber from './utils/parseToNumber.js';
import Car from './Car.js';
import Racing from './Racing.js';
import Printer from './view/Printer.js';
import IO_MESSAGE from './constants/IO_MESSAGE.js';

class App {
  async run() {
    const cars = await this.getCar();
    const tryCount = await this.getTryCount();
    const racing = new Racing(cars, tryCount);

    Printer.printHeader(IO_MESSAGE.resultHeader);
    racing.runRace();

    const raceResult = racing.decideWinner();
    Printer.printWinner(raceResult);
  }

  async getCar() {
    try {
      const carNameInput = await InputView.readLineAsync(IO_MESSAGE.getCarName);
      const parsedCarName = splitInput(carNameInput);
      NameValidator.isValid(parsedCarName);
      return parsedCarName.map((carName) => new Car(carName));
    } catch (error) {
      OutputView.print(error.message);
      return this.getCar();
    }
  }

  async getTryCount() {
    try {
      const tryCount = await InputView.readLineAsync(IO_MESSAGE.getTryCount);
      const parsedTryCount = parseToNumber(tryCount);
      CountValidator.isValid(parsedTryCount);
      return parsedTryCount;
    } catch (error) {
      OutputView.print(error.message);
      return this.getTryCount();
    }
  }
}

export default App;
