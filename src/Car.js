import Validation from "./validation.js";

class Car {
  #carList;

  constructor(carList) {
    this.#carList = this.#validation(carList);
  }

  #validation(carList) {
    Validation.isDuplicate(carList);
    Validation.checkRange(carList);
    return carList;
  }

  getCarList() {
    return this.#carList;
  }
}

export default Car;
