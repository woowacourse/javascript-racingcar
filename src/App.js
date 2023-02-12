const Race = require('./domain/Race');
const Car = require('./domain/Car');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const InputValidator = require('./utils/InputValidator');
const { errorCheckFor } = require('./utils/errorCheckFor');

class App {
  #race;

  play() {
    this.#race = new Race();
    InputView.readCarNames(this.#afterReadCarNames);
  }

  #afterReadCarNames = (input) => {
    errorCheckFor(
      () => this.#prepareRace(input),
      () => InputView.readCarNames(this.#afterReadCarNames)
    );
  };

  #afterReadTrial = (input) => {
    errorCheckFor(
      () => this.#resultRace(input),
      () => InputView.readTrial(this.#afterReadTrial)
    );
  };

  #prepareRace(input) {
    const carNames = input.split(',');

    carNames.forEach((name) => {
      InputValidator.checkCarName(name);
      this.#race.addCar(new Car(name));
    });

    InputView.readTrial(this.#afterReadTrial);
  }

  #resultRace(input) {
    InputValidator.checkTrial(input);

    this.#race.setTrial(input);
    this.#race.start();

    OutputView.printRaceResult(this.#race);
    OutputView.printWinners(this.#race.getWinners());
  }
}

module.exports = App;
