import splitInput from './utils/splitInput.js';
import NameValidator from './utils/validator/NameValidator.js';
import CountValidator from './utils/validator/CountValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import parseToNumber from './utils/parseToNumber.js';
import Car from './Car.js';
import Racing from './Racing.js';
import Printer from './Printer.js';

class App {
  async run() {
    try {
      const carName = await InputView.readLineAsync(
        '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      );
      const parsedCarName = splitInput(carName);
      NameValidator.isValid(parsedCarName);
      const cars = parsedCarName.map((carName) => new Car(carName));
      const tryCount =
        await InputView.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const parsedTryCount = parseToNumber(tryCount);
      CountValidator.isValid(parsedTryCount);
      const racing = new Racing(cars);
      racing.runRace(tryCount);
      const raceResult = racing.decideWinner();
      Printer.printWinner(raceResult);
    } catch (error) {
      OutputView.print(error.message);
      await this.run();
    }
  }
}

export default App;
