const Attempts = require('../model/Attempts');
const Car = require('../model/Car');
const isMove = require('../utils');
const Validation = require('../Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/outputView');

class Controller {
  #cars = [];

  #attempt;

  play() {
    this.askCarName();
  }

  askCarName() {
    InputView.readCarName((nameInput) => {
      const carNames = nameInput.split(',');
      Validation.carName(carNames);
      
      console.log(carNames);
      carNames.forEach((name) => {
        const carModel = new Car(name);
        this.#cars.push(carModel);
      });
      this.askAttempts();
    });
  }

  askAttempts() {
    InputView.readAttempts((attemptInput) => {
      Validation.attempt(attemptInput);
      this.#attempt = new Attempts(attemptInput);
      this.race();
    });
  }

  race() {
    const attemptsCount = this.#attempt.getAttemptsCount();
    OutputView.printGameStartMsg();
    Array.from({ length: attemptsCount }).forEach(() => {
      this.#cars.forEach((car) => {
        if (isMove()) {
          car.setProgress();
        }
      });
      this.showGameProgress();
    });
    this.showGameResult();
  }

  showGameProgress() {
    this.#cars.forEach((item) => {
      OutputView.printGameProgress(item.getName(), item.getProgress());
    });
  }

  showGameResult() {
    const winnerNames = [];
    const winnerLength = this.calculateWinnerLength();
    this.#cars.forEach((item) => {
      if (item.getProgress().length === winnerLength) {
        winnerNames.push(item.getName());
      }
    });
    OutputView.printGameResult(winnerNames);
  }

  calculateWinnerLength() {
    let winnerLength = 0;
    this.#cars.forEach((item) => {
      if (winnerLength < item.getProgress().length) {
        winnerLength = item.getProgress().length;
      }
    });
    return winnerLength;
  }
}

module.exports = Controller;
