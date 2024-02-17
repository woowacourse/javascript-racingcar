import Car from "./Car.js";

class Garage {
  #carList = [];
  #carStatusList = [];

  constructor(carNameList) {
    this.#carList = this.#createCarList(carNameList);
    // console.log(this.#carList);
  }

  #createCarList(carNameList) {
    // console.log(carNameList);
    // console.log(typeof carNameList);
    return carNameList.map((carName) => new Car(carName));
  }

  #tryAllCarsMove() {
    this.#carList.forEach((car) => {
      car.tryToMove();
    });
  }

  #setAllCarsPosition() {
    const newCarStatusList = [];
    this.#carList.forEach((car) => newCarStatusList.push(car.getCarStatus()));

    this.#carStatusList = newCarStatusList;
  }

  runAttempt() {
    this.#tryAllCarsMove();
    this.#setAllCarsPosition();
  }

  getCarStatus() {
    return [...this.#carStatusList];
  }
}

export default Garage;
