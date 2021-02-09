import CarNameInput from "./CarNameInput.js";
import TryCountInput from "./TryCountInput.js";
import Car from "../model/Car.js";

export default class App {
  constructor() {
    this.cars = [];
    this.tryCount = 1;

    this.carNameInput = new CarNameInput({ setCars: this.setCars.bind(this) });
    this.tryCountInput = new TryCountInput({
      setTryCount: this.setTryCount.bind(this),
    });
  }

  setCars(carNames) {
    const nextCars = carNames.map((carName) => new Car(carName));
    this.setState({ nextCars });
  }

  setTryCount(nextTryCount) {
    this.setState({ nextTryCount });
  }

  setState({ nextCars, nextTryCount }) {
    if (nextCars) {
      this.cars = nextCars;
    }

    if (nextTryCount) {
      this.tryCount = nextTryCount;
    }
  }
}
