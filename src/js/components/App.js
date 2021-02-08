import CarNameInput from './CarNameInput.js';
import Car from '../model/Car.js';

export default class App {
  constructor() {
    this.cars = [];

    this.carNameInput = new CarNameInput({ setCars: this.setCars.bind(this) });
  }

  setCars(carNames) {
    const nextCars = carNames.map((carName) => new Car(carName));
    this.setState({ nextCars });
  }

  setState({ nextCars }) {
    if (nextCars) {
      this.cars = nextCars;
      console.log(this.cars);
    }
  }
}
