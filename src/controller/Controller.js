import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/constants.js";
import { CAR } from "../constants/constants.js";
import { validateCarNames, validateTryCount } from "../utils/validation.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
export default class Controller {
  async run() {
    const carNameInput = await this.validateAndRetry(
      INPUT_MESSAGE.CAR_NAMES,
      validateCarNames,
    );
    const carNames = carNameInput.split(",").map((carName) => carName.trim());
    const tryCount = await this.validateAndRetry(
      INPUT_MESSAGE.TRY_COUNT,
      validateTryCount,
    );

    const cars = [];
    carNames.forEach((carName) => {
      cars.push(new Car(carName));
    });
    this.runRace(cars, tryCount);
    this.findWinner(cars);
  }

  runRace(cars, tryCount) {
    console.log(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      this.gameRound(cars);
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((x) => x.position));
    const winners = cars.filter((car) => car.position === max);
    console.log(
      `최종 우승자: ${winners.map((winner) => winner.name).join(", ")}`,
    );
  }

  gameRound(cars) {
    cars.forEach((car) => {
      if (this.isMove(getRandomNumber())) car.move();
      console.log(
        `${car.name} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(car.position)}`,
      );
    });
    console.log("");
  }
  async validateAndRetry(message, validateFn) {
    try {
      const inputView = new InputView();
      const input = await inputView.readLineAsync(message);
      validateFn(input);
      return input;
    } catch (e) {
      console.log(e.message);
      return this.validateAndRetry(message, validateFn);
    }
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
