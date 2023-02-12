const Race = require('./domain/Race');
const Car = require('./domain/Car');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const InputException = require('./validate/InputException');

const { errorCheckFor } = require('./utils/errorCheckFor');

class RacingCarGame {
  #race;

  play() {
    this.#race = new Race();
    InputView.readCarNames(this.#readCarNamesEvent);
  }

  #readCarNamesEvent = (input) => {
    errorCheckFor(
      () => this.#successReadCarNamesEvent(input),
      () => InputView.readCarNames(this.#readCarNamesEvent)
    );
  };

  #successReadCarNamesEvent(input) {
    const carNames = input.split(',');

    carNames.forEach((name) => {
      InputException.validateCarName(name);
      this.#race.addCar(new Car(name));
    });

    InputView.readTrial(this.#readTrialEvent);
  }

  #readTrialEvent = (input) => {
    errorCheckFor(
      () => this.#successReadTrialEvent(input),
      () => InputView.readTrial(this.#readTrialEvent)
    );
  };

  #successReadTrialEvent(input) {
    InputException.validateRaceTrial(input);

    this.#race.setTrial(input);
    this.#race.start();

    OutputView.printRaceResult(this.#race);
    OutputView.printWinners(this.#race.getWinners());
  }
}

module.exports = RacingCarGame;
