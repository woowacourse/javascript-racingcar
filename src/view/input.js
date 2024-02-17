import ReadLine from "../util/readLineAsync.js";
import Cars from "../Cars.js";
import Validation from "../Validation.js";
import { MESSAGES } from "../constant/constant.js";

class Input {
  static inputCarNames = async () => {
    try {
      const carNames = (await ReadLine.readLineAsync(MESSAGES.INPUT_CAR_NAMES)).split(",");
      Validation.validateCarNames(carNames);
      const car = new Cars(carNames);
      return car.getCarNames;
    } catch (error) {
      console.log(error.message);
      return Input.inputCarNames();
    }
  };

  static inputTryInput = async () => {
    try {
      const tryNumber = Number(await ReadLine.readLineAsync(MESSAGES.INPUT_TRY_NUMBER));
      Validation.validateTryNumber(tryNumber);
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return Input.inputTryInput();
    }
  };
}

export default Input;
