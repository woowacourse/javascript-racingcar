import InputView from './InputView';
import Validation from './utils/Validation';
import OutputView from './OutputView';

class Game {
  getCarNames() {
    while (true) {
      try {
        const carNames = InputView.queryCarName();
        const carNamesArray = this.carNamesToCarNamesArray(carNames);
        Validation.carNamesArrayValidate(carNamesArray);
        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  carNamesToCarNamesArray(carNames) {
    return carNames.split(',');
  }
}
