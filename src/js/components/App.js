import CarNameInput from './CarNameInput.js';

export default class App {
  constructor() {
    this.cars = [];

    this.carNameInput = new CarNameInput({ setCars: this.setCars.bind(this) });
  }

  setCars(names) {
    const nextCars = names.map((name) => new Car(name));
    this.setState({ nextCars });
  }

  setState({ nextCars }) {
    if (nextCars) {
      this.cars = nextCars;
    }
  }
}
