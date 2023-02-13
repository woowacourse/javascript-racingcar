const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const CONSTANTS = require('../Constant/Constants');
const Car = require('../Models/Car');
const CarRace = require('../Models/CarRace');
const Console = require('../Utils/Console');

class CarRaceController {
  #carRace;

  start() {
    this.getCars();
  }

  getCars() {
    InputView.readCarName(carNameString => {
      const splitCarName = carNameString.split(CONSTANTS.COMMA);
      CarRace.validateCars(splitCarName);
      this.createCarRace(splitCarName);
    });
  }

  createCarRace(carNames) {
    const cars = carNames.map(name => new Car(name));
    this.#carRace = new CarRace(cars);
    this.getTryCount();
  }

  getTryCount() {
    InputView.readTryCount(count => {
      CarRace.validateTryCount(count);
      this.startCarRace(count);
    });
  }

  startCarRace(count) {
    OutputView.printResultMessage();
    Array.from({ length: count }).forEach(() => {
      this.#carRace.runOnce();
      OutputView.printRaceResult(this.#carRace.getResult());
    });

    this.finishCarRace();
  }

  finishCarRace() {
    OutputView.printWinners(this.#carRace.getWinners());
    Console.close();
  }
}

module.exports = CarRaceController;
