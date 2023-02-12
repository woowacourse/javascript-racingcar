const Race = require('./domain/Race');
const Car = require('./domain/Car');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const { errorCheckFor, InputValidator } = require('./utils');
const { COMMENT } = require('./constant');

class App {
  #race;

  play() {
    this.#race = new Race();
    InputView.readInput(this.#afterReadCarNames, COMMENT.CARNAMES_PRECOMMENT);
  }

  #afterReadCarNames = (input) => {
    errorCheckFor(
      () => this.#prepareRace(input),
      () =>
        InputView.readInput(
          this.#afterReadCarNames,
          COMMENT.CARNAMES_PRECOMMENT
        )
    );
  };

  #afterReadTrial = (input) => {
    errorCheckFor(
      () => this.#resultRace(input),
      () => InputView.readInput(this.#afterReadTrial, COMMENT.TRIAL_PRECOMMENT)
    );
  };

  #prepareRace(input) {
    const carNames = input.split(',');

    carNames.forEach((name) => {
      InputValidator.checkCarName(name);
      this.#race.addCar(new Car(name));
    });

    InputView.readInput(this.#afterReadTrial, COMMENT.TRIAL_PRECOMMENT);
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
