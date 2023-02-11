const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const CONSTANTS = require('../Constant/Constants');
const Validator = require('../Utils/Validator');
const Car = require('../Models/Car');
const CarRace = require('../Models/CarRace');

class CarRaceController {
  #carRace;

  start() {
    this.getCarName();
  }

  getCarName() {
    InputView.readCarName(carName => {
      const splitCarName = carName.split(CONSTANTS.comma);
      Validator.validateNamesOfCars(splitCarName);
      this.createCar(splitCarName);
    });
  }

  createCar(carNames) {
    const cars = carNames.map(name => {
      Validator.validateCarName(name);
      return new Car(name);
    });
    this.getTryCount(cars);
  }

  getTryCount(cars) {
    InputView.readTryCount(count => {
      Validator.validateTryCount(count);
      this.#carRace = new CarRace(cars);
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
    OutputView.printWinners(this.#carRace.getResult());
  }
}

module.exports = CarRaceController;
