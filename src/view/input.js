import ReadLine from "../util/readLineAsync.js";
import Cars from "../domain/Cars.js";
import Validation from "../domain/Validation.js";
import { MESSAGES } from "../constant/constant.js";

class Input {
  static readCarNames = async () => {
    try {
      const carNames = (await ReadLine.readLineAsync(MESSAGES.INPUT_CAR_NAMES)).split(",");
      Validation.validateCarNames(carNames);
      const car = new Cars(carNames);
      return car.getCarNames;
    } catch (error) {
      console.log(error.message);
      return Input.readCarNames();
    }
  };

  static readTryInput = async () => {
    try {
      const tryNumber = Number(await ReadLine.readLineAsync(MESSAGES.INPUT_TRY_NUMBER));
      Validation.validateTryNumber(tryNumber);
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return Input.readTryInput();
    }
  };
}

export default Input;
