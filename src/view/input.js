import ReadLine from "../util/readLineAsync.js";
import Cars from "../Cars.js";
import Validation from "../Validation.js";
import { MESSAGES } from "../constant/constant.js";

class Input {
  static carNameInput = async () => {
    try {
      const carNames = (await ReadLine.readLineAsync(MESSAGES.INPUT_CAR_NAMES)).split(",");
      Validation.validateCarNames(carNames);
      const car = new Cars(carNames);
      return car.getCarList();
    } catch (error) {
      console.log(error.message);
      return Input.carNameInput();
    }
  };

  static tryInput = async () => {
    try {
      const tryNumber = Number(await ReadLine.readLineAsync(MESSAGES.INPUT_TRY_NUMBER));
      Validation.validateTryNumber(tryNumber);
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return Input.tryInput();
    }
  };
}

export default Input;
