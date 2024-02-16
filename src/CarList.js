import Car from './Car';

class CarList {
  #carList;

  constructor(carNameList) {
    this.#carList = carNameList.map((carName) => new Car(carName));
  }

  get cars() {
    return this.#carList;
  }

  #getMaxPosition() {
    let maxPosition = 0;
    this.#carList.forEach((car) => {
      maxPosition = Math.max(maxPosition, car.position);
    });
    return maxPosition;
  }

  #getFinalCarList() {
    const finalPosition = this.#getMaxPosition();
    return this.#carList.filter((car) => car.position === finalPosition);
  }

  getWinner() {
    return this.#getFinalCarList().map((car) => car.name);
  }
}

export default CarList;
