const InputView = require('../view/InputView.js');
const Validator = require('../utils/Validator.js');
const RacingCar = require('../model/RacingCar.js');

class RacingController {
  #cars;

  constructor() {
    this.#cars = [];
  }

  inputCarName() {
    InputView.readCarName((carNames) => {
      const carArr = carNames.split(',');
      Validator.validateCarNames(carArr);

      carArr.forEach((carName) => {
        this.#cars.append(new RacingCar(carName));
      });
    });
  }
}

const app = new RacingController();

app.inputCarName();
module.exports = RacingController;
