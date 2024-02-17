import ReadLine from "../util/readLineAsync.js";
import Cars from "../Cars.js";
import Validation from "../Validation.js";
import { MESSAGES, ERROR } from "../constant/index.js";

class Input {
  static carNameInput = async () => {
    try {
      const carList = await ReadLine.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
      const car = new Cars(carList.split(","));
      return car.getCarList();
    } catch (error) {
      console.log(error.message);
      return this.carNameInput();
    }
  };

  static tryInput = async () => {
    try {
      const tryNumber = await ReadLine.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);

      if (!Validation.isNaturalNumber(tryNumber)) {
        throw new Error(ERROR.NOT_NATURAL_NUMBER);
      }

      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return this.tryInput();
    }
  };
}

export default Input;
