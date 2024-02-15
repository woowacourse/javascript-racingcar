import readLineAsync from "../util/readLineAsync.js";
import Cars from "../Cars.js";
import Validation from "../Validation.js";
import { MESSAGES } from "../constant/constant.js";

const carNameInput = async () => {
  try {
    const carList = await readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    const car = new Cars(carList.split(","));

    return car.getCarList();
  } catch (error) {
    console.log(error.message);
    return carNameInput();
  }
};

const tryInput = async () => {
  try {
    const tryNumber = await readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
    Validation.isNaturalNumber(tryNumber);

    return tryNumber;
  } catch (error) {
    console.log(error.message);
    return tryInput();
  }
};

export { carNameInput, tryInput };
