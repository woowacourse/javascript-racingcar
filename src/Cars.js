import Validation from "./Validation.js";

class Cars {
  #carList;

  constructor(carList) {
    this.#carList = carList;
  }

  getCarList() {
    return this.#carList;
  }
}

export default Cars;
