import Input from "../view/Input.js";
import Car from "./Car.js";
import Output from "../view/Output.js";
import { STEP } from "../constants/setting.js";
import ValidateCar from "../validator/ValidateCar.js";
import ValidateTryNumber from "../validator/ValidateTryNumber.js";

export default class Race {
  #cars = [];
  #parseTryNumber = 0;

  async play(step = STEP.carName) {
    try {
      if (step === STEP.carName) {
        await this.#readCarNames();
        step = STEP.tryNumber;
      }

      if (step === STEP.tryNumber) {
        await this.#readTryNumber();
        step = STEP.racing;
      }

      if (step === STEP.racing) {
        this.#racing();
        step = STEP.winner;
      }

      if (step === STEP.winner) {
        this.#getWinner();
        return;
      }
    } catch (e) {
      Output.print(e.message);
      return this.play(step);
    }
  }

  async #readCarNames() {
    const carNames = await Input.carName();
    const parseCars = carNames.toString().split(",");

    ValidateCar.carNamesAndCount(parseCars);

    parseCars.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }
  async #readTryNumber() {
    const tryNumber = await Input.tryNumber();
    this.#parseTryNumber = parseInt(tryNumber);

    ValidateTryNumber.tryNumber(this.#parseTryNumber);
  }

  #racing() {
    Output.newLine();
    Output.raceResult();
    for (let i = 0; i < this.#parseTryNumber; i += 1) {
      this.#cars.forEach((car) => {
        car.move();
        Output.scoreByRace(car.getName(), car.getPosition());
      });
      Output.newLine();
    }
  }

  async #getWinner() {
    const positions = this.#cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);
    const winnerCars = this.#cars.filter(
      (car) => car.getPosition() === maxPosition
    );
    const winnerNames = winnerCars.map((car) => car.getName());
    Output.winners(winnerNames);
  }
}
