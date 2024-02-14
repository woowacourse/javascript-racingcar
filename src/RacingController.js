import InputView from './InputView';

class Game {
  getCarNames() {
    while (true) {
      try {
        const carNames = InputView.queryCarName();
        const carNamesArray = this.carNamesToCarNamesArray(carNames);
        break;
      } catch (error) {}
    }
  }

  carNamesToCarNamesArray(carNames) {
    return carNames.split(',');
  }
}
