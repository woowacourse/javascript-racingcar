import Car from "./Car.js";

class Garage {
  #carList = [];
  #carStatusList = [];

  constructor(carNameList) {
    this.#carList = this.#createCarList(carNameList);
  }

  #createCarList(carNameList) {
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

  getCarStatus() {
    return [...this.#carStatusList];
  }

  #getMaxCarPosition() {
    return Math.max(...this.#carStatusList.map((car) => car.position));
  }

  runAttempt() {
    this.#tryAllCarsMove();
    this.#setAllCarsPosition();
  }

  findWinners() {
    const finalCarStatus = this.getCarStatus();
    const maxPosition = this.#getMaxCarPosition();

    return finalCarStatus
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default Garage;
