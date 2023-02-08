const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validation = require('./Validation');
const inputErrorHandler = require('./utils/inputErrorHandler');
const Car = require('./Car');
const randomNumberGenerator = require('./utils/randomNumberGenerator');

class App {
  #cars;

  play() {
    this.#requestCarNames();
  }

  #requestCarNames() {
    InputView.readCarNames((carNamesInput) => {
      const carNames = carNamesInput.split(',').map((carName) => carName.trim());
      const isValidInput = inputErrorHandler(Validation.validateCarNames, carNames);

      if (!isValidInput) {
        this.#requestCarNames();
        return;
      }

      this.#generateCars(carNames);
    });
  }

  #generateCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));

    this.#requestRaceRound();
  }

  #requestRaceRound() {
    InputView.readRaceRound((raceRoundInput) => {
      const raceRound = Number(raceRoundInput);
      const isValidInput = inputErrorHandler(Validation.validateRaceRound, raceRound);

      if (!isValidInput) {
        this.#requestRaceRound();
        return;
      }

      this.#playEveryRound(raceRound);
    });
  }

  #playEveryRound(raceRound) {
    OutputView.print('실행 결과');

    while (raceRound) {
      this.#playEachRound();
      this.#printEachRoundResult();
      raceRound -= 1;
    }
  }

  #playEachRound() {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  #printEachRoundResult() {
    this.#cars.forEach((car) => {
      const name = car.getName();
      const position = car.getPosition();

      OutputView.printRoundResult(name, position);
    });
    OutputView.print('');
  }
}

new App().play();
