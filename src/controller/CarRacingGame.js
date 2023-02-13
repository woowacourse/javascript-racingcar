const Attempts = require('../model/Attempts');
const Car = require('../model/Car');
const { isMove, calculateRandomNumber } = require('../utils');
const inputView = require('../view/inputView');
const outputView = require('../view/outputView');

class CarRacingGame {
  #cars = [];

  #attempt;

  play() {
    this.askCarName();
  }

  askCarName() {
    inputView.readCarName((carNames) => {
      carNames.forEach((name) => {
        const carModel = new Car(name);
        this.#cars.push(carModel);
      });
      this.askAttempts();
    });
  }

  askAttempts() {
    inputView.readAttempts((attemptInput) => {
      this.#attempt = new Attempts(attemptInput);
      this.race();
    });
  }

  race() {
    const attemptsCount = this.#attempt.getAttemptsCount();
    outputView.printGameStartMsg();
    this.calculateProgress(attemptsCount);
    this.showGameProgress();
    this.showGameWinner();
  }

  calculateProgress(attemptsCount) {
    Array.from({ length: attemptsCount }).forEach(() => {
      this.#cars.forEach((car) => {
        const randomNumber = calculateRandomNumber();
        if (isMove(randomNumber)) car.setProgress();
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
      outputView.printGameProgress(
        car.getName(),
        car.getProgress(),
        index === this.#cars.length - 1
      );
    });
  }

  showGameWinner() {
    const winnerLength = this.calculateWinnerLength();
    const winnerNames = this.calculateWinner(winnerLength);
    outputView.printGameWinner(winnerNames);
  }
}

module.exports = CarRacingGame;
