import Validation from "../util/Validation.js";
import { ERROR, CAR_NAME_REQUIREMENTS } from "../constant/index.js";

const { CAR_DUPLICATE, NAME_RANGE } = ERROR;
const { NAME_LENGTH_MIN, NAME_LENGTH_MAX } = CAR_NAME_REQUIREMENTS;

class Cars {
  #carList;

  constructor(carList) {
    this.#carList = this.#validation(carList);
  }

  #validation(carList) {
    if (Validation.isDuplicate(carList)) {
      throw new Error(CAR_DUPLICATE);
    }
    this.#checkListInRange(carList, NAME_LENGTH_MAX, NAME_LENGTH_MIN);

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
