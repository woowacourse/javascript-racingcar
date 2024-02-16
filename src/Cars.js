import Validation from "./Validation.js";

class Cars {
  #carList;

  constructor(carList) {
    this.#validateCarName(carList);
    this.#carList = carList
  }

  #validateCarName(carList) {
    Validation.isDuplicate(carList);
    Validation.checkRange(carList);
  }

  getCarList() {
    return this.#carList;
  }
}

export default Cars;
