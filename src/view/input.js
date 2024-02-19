import ReadLine from "../util/readLineAsync.js";
import Cars from "../domain/Cars.js";
import Validation from "../util/Validation.js";
import { MESSAGES, ERROR } from "../constant/index.js";
const { INPUT_CAR_NAMES, INPUT_TRY_NUMBER } = MESSAGES;

class Input {
  static carNameInput = async () => {
    const carList = await ReadLine.readLineAsync(INPUT_CAR_NAMES);
    return carList;
  };

  static tryInput = async () => {
    try {
      const tryNumber = await ReadLine.readLineAsync(INPUT_TRY_NUMBER);
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return this.tryInput();
    }
  };
}

export default Input;
