import Validation from "./Validation.js";

class Cars {
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

export default Cars;
