import CarNameInput from './CarNameInput.js';
import TryCountInput from './TryCountInput.js';
import RacingResult from './RacingResult.js';
import RacingWinner from './RacingWinner.js';
import Car from '../model/Car.js';
import { MIN_NUMBER, MAX_NUMBER, MOVE_BOUNDED_NUMBER } from '../util/constants.js';
import { getRandomNumber } from '../util/general.js';

export default class App {
  constructor() {
    this.$app = document.querySelector('#app');
    this.cars = [];

    this.carNameInput = new CarNameInput({
      createCars: this.createCars.bind(this),
      play: this.play.bind(this),
    });
    this.tryCountInput = new TryCountInput({
      play: this.play.bind(this),
    });
    this.racingResult = new RacingResult({
      $parent: this.$app,
      cars: this.cars,
    });
    this.racingWinner = new RacingWinner({
      $parent: this.$app,
      resetCarGame: this.resetCarGame.bind(this),
    });
  }

  createCars(carNames) {
    this.setState(carNames.map((carName) => new Car(carName)));
  }

  isCompletedInputs() {
    return this.carNameInput.carNames.length && this.tryCountInput.tryCount;
  }

  async play() {
    if (!this.isCompletedInputs()) {
      return;
    }

    this.moveCars(this.tryCountInput.tryCount);
    await this.racingResult.showResult(this.cars);
    await this.racingWinner.showWinners(this.cars);
  }

  moveCars(tryCount) {
    this.cars.forEach((car) => {
      for (let i = 0; i < tryCount; i++) {
        car.recodeMove(getRandomNumber({ min: MIN_NUMBER, max: MAX_NUMBER }) >= MOVE_BOUNDED_NUMBER);
      }
    });
  }

  resetCarGame() {
    this.setState([]);
    this.carNameInput.reset();
    this.tryCountInput.reset();
    this.racingResult.reset();
    this.racingWinner.reset();
  }

  setState(nextCars) {
    this.cars = nextCars;
  }
}
