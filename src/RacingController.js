import InputView from './InputView';
import Validation from './utils/Validation';

class Game {
  getCarNames() {
    while (true) {
      try {
        const carNames = InputView.queryCarName();
        const carNamesArray = this.carNamesToCarNamesArray(carNames);
        Validation.carNamesArrayValidate(carNamesArray);
        break;
      } catch (error) {}
    }
  }

  carNamesToCarNamesArray(carNames) {
    return carNames.split(',');
  }
}
