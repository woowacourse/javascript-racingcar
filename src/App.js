const InputView = require("./view/InputView.js");
const OutputView = require("./view/OutputView.js");
const Validator = require("./model/Validator.js");

const Car = require("./model/Car.js");
const Console = require("./lib/Console.js");

class App {
  #cars = [];
  #tryCount;

  play() {
    this.readCarName();
  }

  readCarName() {
    InputView.readCarName((carName) => this.readCarNameCallback(carName));
  }

  readCarNameCallback(carNames) {
    try {
      Validator.carName(carNames);
      this.createCarObject(carNames);
      this.readTryCount();
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readCarName();
    }
  }

  createCarObject(carNames) {
    carNames.split(",").forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }

  readTryCount() {
    InputView.readTryCount((tryCount) => this.readTryCountCallback(tryCount));
  }

  readTryCountCallback(tryCount) {
    try {
      Validator.tryCount(tryCount);
      this.#tryCount = Number(tryCount);
      this.moveCar();
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readTryCount();
    }
  }

  moveCar() {
    this.#cars.forEach((car) => {
      car.move(this.#tryCount);
    });

    this.printProcessResult();
  }

  printProcessResult() {
    const carsStatus = this.#cars.map((car) => car.getStatus());
    OutputView.printProcessResult(carsStatus, this.#tryCount);

    this.printWinner(carsStatus);
  }

  printWinner(carsStatus) {
    const winner = Car.getWinner(carsStatus);

    OutputView.printWinner(winner);
    this.quit();
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
