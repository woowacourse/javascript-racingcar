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
    let finalPosition = 0;
    this.#carList.forEach((car) => {
      const carData = car.getData();
      finalPosition = Math.max(finalPosition, carData.position);
    });
    return finalPosition;
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
