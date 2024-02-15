import Car from './Car';
import OutputView from './views/OutputView';

class CarList {
  #carList;

  constructor(carNameList) {
    this.#carList = carNameList.map((carName) => new Car(carName));
  }

  printCurrentPosition() {
    this.#carList.forEach((car) => {
      car.move();
      car.printPosition();
    });
    OutputView.print();
  }

  #getMaxPosition() {
    let maxPosition = 0;
    this.#carList.forEach((car) => {
      const carData = car.getData();
      maxPosition = Math.max(maxPosition, carData.position);
    });
    return maxPosition;
  }

  #getFinalCarList() {
    const finalPosition = this.#getMaxPosition();
    return this.#carList.filter((car) => {
      const carData = car.getData();
      return carData.position === finalPosition;
    });
  }

  getWinner() {
    return this.#getFinalCarList().map((car) => car.getData().name);
  }
}

export default CarList;
