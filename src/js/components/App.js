import CarNameInput from './CarNameInput.js';
import TryCountInput from './TryCountInput.js';
import RacingResult from './RacingResult.js';
import Car from '../model/Car.js';

export default class App {
  constructor() {
    this.$app = document.querySelector('#app');
    this.carNames = [];
    this.tryCount = 0;
    this.cars = [];

    this.carNameInput = new CarNameInput({
      setCarNames: this.setCarNames.bind(this),
    });
    this.tryCountInput = new TryCountInput({
      setTryCount: this.setTryCount.bind(this),
    });
    this.racingResult = new RacingResult({
      $parent: this.$app,
      cars: this.cars,
    });
  }

  setCarNames(nextCarNames) {
    this.setState({ nextCarNames });
  }

  setTryCount(nextTryCount) {
    this.setState({ nextTryCount });
  }

  createCars() {
    return this.carNames.map((carName) => new Car(carName));
  }

  setState({ nextCarNames, nextTryCount }) {
    if (nextCarNames) {
      this.carNames = nextCarNames;
    }

    if (nextTryCount) {
      this.tryCount = nextTryCount;
    }

    if (this.carNames.length && this.tryCount > 0) {
      this.cars = this.createCars();
      this.racingResult.setState({ nextCars: this.cars });
    }
  }
}
