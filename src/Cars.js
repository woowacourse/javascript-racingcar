import Car from './Car.js';

class Cars {
  #carList;
  constructor(carNameArray) {
    this.#carList = carNameArray.map((name) => new Car(name));
  }
}

export default Cars;
