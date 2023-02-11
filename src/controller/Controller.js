const Attempts = require('../model/Attempts');
const Car = require('../model/Car');
const { Random } = require('../utils');
const inputView = require('../view/inputView');
const outputView = require('../view/outputView');

class Controller {
  #cars;

  #attempt;

  play() {
    this.askCarName();
  }

  askCarName() {
    inputView.readCarName((carNames) => {
      this.#cars = carNames.map((name) => {
        return new Car(name);
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
        const randomNumber = Random.getNumber();
        if (Car.isMove(randomNumber)) car.setProgress();
      });
      this.showGameProgress();
    });
  }

  calculateWinner() {
    const winnerProgress = Math.max(
      ...this.#cars.map((car) => car.getProgress().length)
    );

    return this.getWinnerNames(winnerProgress);
  }

  getWinnerNames(winnerProgress) {
    const winnerNames = this.#cars.reduce((accumulator, car) => {
      if (car.getProgress().length === winnerProgress) {
        return [...accumulator, car.getName()];
      }
      return accumulator;
    }, []);

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
    const winnerNames = this.calculateWinner();
    outputView.printGameWinner(winnerNames);
  }
}

module.exports = Controller;
