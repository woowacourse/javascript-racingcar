import CarValidator from "./domains/validators/CarValidator.js";
import Race from "./domains/Race.js";
import TryNumberValidator from "./domains/validators/TryNumberValidator.js";
import Input from "./views/Input.js";
import Output from "./views/Output.js";

export default class App {
  #raceModel = new Race();
  #tryNumber = 0;
  #cars = [];

  static STEP = {
    carName: "carName",
    tryNumber: "tryNumber",
    racing: "racing",
    result: "result",
  };

  async play(step = App.STEP.carName) {
    try {
      if (step === App.STEP.carName) {
        await this.#readCarNames();
        step = App.STEP.tryNumber;
      }

      if (step === App.STEP.tryNumber) {
        await this.#readTryNumber();
        step = App.STEP.racing;
      }

      if (step === App.STEP.racing) {
        this.#race();
        step = App.STEP.winner;
      }

      if (step === App.STEP.winner) {
        this.#printWinner();
        return;
      }
    } catch (e) {
      Output.print(e.message);
      return this.play(step);
    }
  }

  async #readCarNames() {
    const carNames = await Input.carName();
    CarValidator.validateInputCarName(carNames);
    this.#cars = this.#raceModel.createCars(carNames);
  }

  async #readTryNumber() {
    const tryNumber = await Input.tryNumber();
    TryNumberValidator.validateInputTryNumber(tryNumber);
    this.#tryNumber = tryNumber;
  }

  #race() {
    Output.newLine();
    Output.raceResult();
    for (let i = 0; i < this.#tryNumber; i++) {
      this.#raceModel.race(this.#cars);
      this.#cars.forEach((car) => {
        Output.scoreByRace(car.name, car.position);
      });
      Output.newLine();
    }
  }

  #printWinner() {
    const winners = this.#raceModel.getWinner(this.#cars);
    Output.winners(winners);
  }
}
