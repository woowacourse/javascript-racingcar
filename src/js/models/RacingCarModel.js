import Car from "./Car.js";

export default class RacingCarModel {
  constructor() {
    this.cars = [];
  }

  setCars = (carNames) => {
    const splitedCarNames = this.splitCarNames(carNames);
    this.cars = splitedCarNames.map((name) => new Car(name));
    console.log(this.cars);
  };

  splitCarNames = (carNames) => carNames.split(",");
}
