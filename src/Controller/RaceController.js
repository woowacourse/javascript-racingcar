const InputView = require('../View/InputView');
const Validator = require('../Utils/Validator');
const Car = require('../Models/Car');
const Race = require('../Models/Race');

class RaceController {
  #race;
  
  start() {
    this.getCarName();
  }

  getCarName() {
    InputView.readCarName(carName => {
      const splitCarName = carName.split(',');
      Validator.validateNumOfCar(splitCarName.length);
      const cars = [];
      splitCarName.forEach(name => {
        Validator.validateCarName(name);
        cars.push(new Car(name));
      });
      this.getTryCount(cars);
    });
  }

  getTryCount(cars) {
    InputView.readTryCount(count => {
      Validator.valdateTryCount(count);
      this.#race = new Race(cars, count);
      this.showRaceResult();
    });
  }
  
  showRaceResult() {
    this.#race.start();
  }
}

module.exports = RaceController;
