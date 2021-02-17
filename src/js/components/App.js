import CarNameInput from './CarNameInput.js';
import TryCountInput from './TryCountInput.js';
import RacingResult from './RacingResult.js';
import RacingWinner from './RacingWinner.js';
import Car from '../model/Car.js';

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
    this.setState({ cars: carNames.map((carName) => new Car(carName)) });
  }

  isCompletedInputs() {
    return this.carNameInput.carNames.length && this.tryCountInput.tryCount;
  }

  async play() {
    if (!this.isCompletedInputs()) {
      return;
    }

    this.cars.forEach((car) => car.recordMoves(this.tryCountInput.tryCount));
    await this.racingResult.showResult(this.cars);
    await this.racingWinner.showWinners(this.cars);
  }

  resetCarGame() {
    this.setState({ cars: [] });
    this.carNameInput.reset();
    this.tryCountInput.reset();
    this.racingResult.reset();
    this.racingWinner.reset();
  }

  setState({ cars }) {
    this.cars = cars;
  }
}
