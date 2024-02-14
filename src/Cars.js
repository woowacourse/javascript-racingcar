import Car from './Car.js';

class Cars {
  #carList;
  constructor(carNameArray) {
    this.#carList = carNameArray.map((name) => new Car(name));
  }

  moveAllCars() {
    this.#carList.forEach((car) => {
      car.move();
    });
  }
  getEachStepString() {
    return this.#carList.reduce((pre, cur) => {
      pre += cur.getDistanceString();
    }, '');
  }
}

export default Cars;
