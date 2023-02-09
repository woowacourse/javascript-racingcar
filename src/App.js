const Race = require('./domain/Race');
const Car = require('./domain/Car');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validate = require('./utils/Validate');
const { errorCheckFor } = require('./utils/errorCheckFor');

class App {
  #race;

  play() {
    this.#race = new Race();
    InputView.readCarNames(this.#readCarNamesCallback);
  }

  #readCarNamesCallback = (input) => {
    errorCheckFor(
      () => this.#prepareRace(input),
      () => this.#readCarNamesCallback()
    );
  };

  #readTrialCallback = (input) => {
    errorCheckFor(
      () => this.#resultRace(input),
      () => this.#readTrialCallback()
    );
  };

  #prepareRace(input) {
    const carNames = input.split(',');

    carNames.forEach((name) => {
      Validate.checkCarName(name);
      this.#race.addCar(new Car(name));
    });

    InputView.readTrial(this.#readTrialCallback);
  }
}

module.exports = App;
