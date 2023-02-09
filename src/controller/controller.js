const Attempts = require('../model/Attempts');
const Car = require('../model/Car');
const { isMove } = require('../utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #cars = [];

  #attempt;

  play() {
    this.askCarName();
  }

  askCarName() {
    InputView.readCarName((carNames) => {
      carNames.forEach((name) => {
        const carModel = new Car(name);
        this.#cars.push(carModel);
      });
      this.askAttempts();
    });
  }

  askAttempts() {
    InputView.readAttempts((attemptInput) => {
      this.#attempt = new Attempts(attemptInput);
      this.race();
    });
  }

  race() {
    const attemptsCount = this.#attempt.getAttemptsCount();
    OutputView.printGameStartMsg();
    this.calculateProgress(attemptsCount);
    this.showGameWinner();
  }

  calculateProgress(attemptsCount) {
    Array.from({ length: attemptsCount }).forEach(() => {
      this.#cars.forEach((car) => {
        if (isMove()) car.setProgress();
      });
      this.showGameProgress();
    });
  }

  calculateWinnerLength() {
    let winnerLength = 0;
    this.#cars.forEach((car) => {
      if (winnerLength < car.getProgress().length) {
        winnerLength = car.getProgress().length;
      }
    });
    return winnerLength;
  }

  calculateWinner(winnerLength) {
    const winnerNames = [];
    this.#cars.forEach((car) => {
      if (car.getProgress().length === winnerLength) {
        winnerNames.push(car.getName());
      }
    });
    return winnerNames;
  }

  showGameProgress() {
    this.#cars.forEach((car, index) => {
      OutputView.printGameProgress(
        car.getName(),
        car.getProgress(),
        index === this.#cars.length - 1
      );
    });
  }

  showGameWinner() {
    const winnerLength = this.calculateWinnerLength();
    const winnerNames = this.calculateWinner(winnerLength);
    OutputView.printGameResult(winnerNames);
  }
}

module.exports = Controller;
