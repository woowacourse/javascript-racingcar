import Validation from "../util/Validation.js";
import { ERROR, REQUIREMENT } from "../constant/index.js";

const { CAR_DUPLICATE, NAME_RANGE } = ERROR;
const { CAR_NAME_MIN, CAR_NAME_MAX } = REQUIREMENT;

class Cars {
  #carList;

  constructor(carList) {
    this.#carList = this.#validation(carList);
  }

  #validation(carList) {
    if (Validation.isDuplicate(carList)) {
      throw new Error(CAR_DUPLICATE);
    }
    this.#checkListInRange(carList, CAR_NAME_MAX, CAR_NAME_MIN);

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
