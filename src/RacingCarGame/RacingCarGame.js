import InputView from "../view/InputView.js";
import Car from "./Car.js";
import StringParser from "../utils/StringParser.js";

class RacingCarGame {
  #carArray;
  #attempt;

  constructor() {
    this.#carArray = [];
    this.#setCars();
  }

  async #setCars() {
    const input = await InputView.readCarNames();
    const carNames = StringParser.splitCarNames(input);

    carNames.forEach((carName) => {
      const newCar = new Car(carName);
      this.#carArray.push(newCar);
    });
  }
}

export default RacingCarGame;
