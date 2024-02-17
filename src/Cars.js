import Validation from "./Validation.js";
import { ERROR } from "./constant/index.js";
const { CAR_DUPLICATE, NAME_RANGE, NATURAL_NUMBER, NOT_A_NUMBER } = ERROR;

class Cars {
  #carList;

  constructor(carList) {
    this.#carList = this.#validation(carList);
  }

  #validation(carList) {
    if (Validation.isDuplicate(carList)) {
      throw new Error(CAR_DUPLICATE);
    }
    this.#checkListInRange(carList, 5, 1);

    return carList;
  }

  #checkListInRange(carList, max, min) {
    carList.forEach((carName) => {
      if (Validation.isInRange(carName, max, min)) {
        throw new Error(NAME_RANGE);
      }
      return;
    });
  }

  getCarList() {
    return this.#carList;
  }
}

export default Cars;
