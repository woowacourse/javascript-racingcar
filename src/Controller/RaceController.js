const InputView = require('../View/InputView');
const Validator = require('../Utils/Validator');

class RaceController {
  start() {
    this.getCarName();
  }

  getCarName() {
    InputView.readCarName(carName => {
      const splitCarName = carName.split(',');
      Validator.valdateNumOfCar(splitCarName.length);
      splitCarName.forEach(el => Validator.validateCarName(el));
      this.getTryCount();
    });
  }

  getTryCount() {
    InputView.readTryCount(count => {
      Validator.valdateTryCount(count);
    });
  }
}

module.exports = RaceController;
