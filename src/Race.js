import readLineAsync from "./Input.js";
import { INFO_MESSAGE } from "./constants.js";
import Car from "./Car.js";

export const start = async () => {
  while (true) {
    const name = await readLineAsync(INFO_MESSAGE.CAR_NAMR_INPUT);
    const carNames = name.split(",");
    try {
      let cars = carNames.map((name) => new Car(name));
    } catch (error) {
      console.log(error.message);
    }
  }
};
