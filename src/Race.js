import readLineAsync from "./Input.js";
import { ERROR_MESSAGE, INFO_MESSAGE } from "./constants.js";
import Car from "./Car.js";

export const start = async () => {
  while (true) {
    const name = await readLineAsync(INFO_MESSAGE.CAR_NAMR_INPUT);
    const carNames = name.split(",");
    try {
      let cars = carNames.map((name) => new Car(name));
      if (cars.length > 10) throw Error(ERROR_MESSAGE.CAR_COUNT);
      if (carNames.length !== new Set(carNames).size)
        throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    } catch (error) {
      console.log(error.message);
    }
  }
};
