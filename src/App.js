const InputView = require('./view/InputView.js');
const OutputView = require('./view/OutputView.js');
const Validator = require('./domain/Validator.js');

const Car = require('./domain/Car.js');
const Console = require('./util/Console.js');

class App {
  #cars = [];
  #tryCount;

  async play() {
    await this.readCarName();
    await this.readTryCount();

    this.moveCar();

    const carsStatus = this.#cars.map((car) => car.getStatus());
    this.printProcessResult(carsStatus);
    this.printWinner(carsStatus);

    this.quit();
  }

  async readCarName() {
    const carNames = await InputView.readCarName();
    try {
      Validator.carName(carNames);
      carNames.split(',').forEach((carName) => this.createCarObject(carName));
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.readCarName();
    }
  }

  createCarObject(carName) {
    this.#cars.push(new Car(carName));
  }

  async readTryCount() {
    const tryCount = await InputView.readTryCount();
    try {
      Validator.tryCount(tryCount);
      this.#tryCount = Number(tryCount);
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.readTryCount();
    }
  }

  moveCar() {
    this.#cars.forEach((car) => {
      car.move(this.#tryCount);
    });
  }

  printProcessResult(carsStatus) {
    OutputView.printProcessResult(carsStatus, this.#tryCount);
  }

  printWinner(carsStatus) {
    const winner = Car.getWinner(carsStatus);

    OutputView.printWinner(winner);
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
