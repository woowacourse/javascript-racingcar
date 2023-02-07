import Car from '../models/Car';
import RacingCarGame from '../models/RacingCarGame';
import InputView from '../views/InputView';

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

export default RacingCarGameController;
