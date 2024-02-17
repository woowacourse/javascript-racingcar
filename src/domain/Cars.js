import Validation from "./Validation.js";

class Cars {
  #carNames;

  constructor(carNames) {
    this.#carNames = carNames;
  }

  get getCarNames() {
    return this.#carNames;
  }
}

export default Cars;
