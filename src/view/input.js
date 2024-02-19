import ReadLine from "../util/readLineAsync.js";
import Cars from "../domain/Cars.js";
import Validation from "../util/Validation.js";
import { MESSAGES, ERROR } from "../constant/index.js";
const { NOT_NATURAL_NUMBER } = ERROR;
const { INPUT_CAR_NAMES, INPUT_TRY_NUMBER } = MESSAGES;

class Input {
  static carNameInput = async () => {
    try {
      const carList = await ReadLine.readLineAsync(INPUT_CAR_NAMES);
      const car = new Cars(carList.split(","));
      return car.getCarList();
    } catch (error) {
      console.log(error.message);
      return this.carNameInput();
    }
  };

  static tryInput = async () => {
    try {
      const tryNumber = await ReadLine.readLineAsync(INPUT_TRY_NUMBER);
      if (!Validation.isNaturalNumber(tryNumber)) {
        throw new Error(NOT_NATURAL_NUMBER);
      }
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return this.tryInput();
    }
  };
}

export default Input;
