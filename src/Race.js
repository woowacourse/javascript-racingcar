import Input from "./view/Input.js";
import Car from "./Car.js";
import Validator from "./Validator.js";
import Output from "./view/Output.js";
import { STEP } from "./constants/setting.js";

export default class Race {
  #cars = [];
  #parseTryCount = 0;

  async play(step = STEP.carName) {
    try {
      if (step === STEP.carName) {
        await this.readCarNames();
        step = STEP.tryCount;
      }

      if (step === STEP.tryCount) {
        await this.readTryCount();
        step = STEP.racing;
      }

      if (step === STEP.racing) {
        this.racing();
        step = STEP.winner;
      }

      if (step === STEP.winner) {
        this.getWinner();
        return;
      }
    } catch (e) {
      Output.print(e.message);
      return this.play(step);
    }
  }

  async readCarNames() {
    const carNames = await Input.carName();
    const parseCars = carNames.toString().split(",");

    Validator.carNamesAndCount(parseCars);

    parseCars.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }
  async readTryCount() {
    const tryCount = await Input.tryCount();
    this.#parseTryCount = parseInt(tryCount);

    Validator.tryCount(this.#parseTryCount);
  }

  racing() {
    Output.newLine();
    Output.raceResult();
    for (let i = 0; i < this.#parseTryCount; i += 1) {
      this.#cars.forEach((car) => {
        car.move();
        Output.scoreByRace(car.name, car.position);
      });
      Output.newLine();
    }
  }

  async getWinner() {
    const positions = this.#cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);
    const winnerCars = this.#cars.filter((car) => car.position === maxPosition);
    const winnerNames = winnerCars.map((car) => car.name);
    Output.winners(winnerNames);
  }
}
