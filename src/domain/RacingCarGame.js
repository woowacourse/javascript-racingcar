import MESSAGE from "../constants/Message.js";
import Car from "./Car.js";
import InputView from "../view/InputView.js";
import { carValidation } from "./CarValidation.js";
import { attemptValidation } from "./attemptValidation.js";
//import OutputView from "../view/OutputView.js";
import StringParser from "../utils/StringParser.js";

// 컨트롤러
class RacingCarGame {
  #carList = [];
  #attempt = 0;

  constructor() {}

  #setCars(carNames) {
    carNames.forEach((carName) => {
      carValidation.validateCarName(carName);

      const car = new Car(carName);
      this.#carList.push(car);
    });
  }

  async #setCarList() {
    const carNameInput = await InputView.readCarNames();
    const parsedCarNames = StringParser.splitCarNames(carNameInput);

    carValidation.validateCarNameArray(parsedCarNames); // 여기서 에러 던짐 (?)
    this.#setCars(parsedCarNames);
  }

  async #setValidCarList() {
    while (true) {
      try {
        await this.#setCarList();

        break;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async #setAttempt() {
    const attemptInput = await InputView.readAttempt();
    attemptValidation.validateAttempt(attemptInput);

    this.#attempt = Number(attemptInput);
  }

  async #setValidAttempt() {
    while (true) {
      try {
        await this.#setAttempt();

        break;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async #setGame() {
    await this.#setValidCarList();
    await this.#setValidAttempt();
  }

  #playGame() {}

  async play() {
    await this.#setGame();
    this.#playGame();
  }
}

export default RacingCarGame;
