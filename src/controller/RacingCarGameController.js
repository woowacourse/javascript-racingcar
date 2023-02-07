const Car = require('../models/Car');
const RacingCarGame = require('../models/RacingCarGame');
const InputView = require('../views/InputView');
class RacingCarGameController {
  #game;

  play() {
    InputView.readCarName(this.#onCarNameSubmit.bind(this));
  }

  #onCarNameSubmit(carNames) {
    const cars = carNames.split(',').map((carName) => new Car(carName));
    this.#game = new RacingCarGame(cars);
  }
}

module.exports = RacingCarGameController;
