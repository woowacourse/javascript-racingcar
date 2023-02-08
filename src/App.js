const CarManager = require('./CarManager');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #carManager;

  play() {
    InputView.readCarNames((carNamesInput) => {
      // todo: validate
      InputView.readTryCount((tryCountsInput) => {
        const carNames = carNamesInput.split(',');
        this.#carManager = new CarManager(carNames);
        this.startRace(parseInt(tryCountsInput));
      });
    });
  }

  startRace(tryCounts) {
    for (let i = 0; i < tryCounts; i++) {
      this.#carManager.progress();

      this.printRaceProgress(this.#carManager.getCars());
    }
  }

  printRaceProgress(cars) {
    OutputView.printRaceProgress(cars);
  }
}

new App().play();

module.exports = App;
