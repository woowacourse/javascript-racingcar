import Car from './Car';

class CarList {
  #carList;

  constructor(carNameList) {
    this.#carList = carNameList.map((carName) => new Car(carName));
  }

  get cars() {
    return this.#carList;
  }

  getWinner() {
    const maxPosition = Math.max(...this.#carList.map((car) => car.position));
    const winners = this.#carList.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default CarList;
