import Car from './car.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
  }

  setCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }
}
