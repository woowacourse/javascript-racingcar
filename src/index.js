import Race from "./domains/Race.js";
import Input from "./views/Input.js";
import Output from "./views/Output.js";
import { STEP } from "./constants/setting.js";

class App {
  race = new Race();
  tryNumber = 0;

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
        this.#race();
        step = STEP.winner;
      }

      if (step === STEP.winner) {
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

    this.race.createCars(carNames);
  }

  async #readTryNumber() {
    this.tryNumber = await Input.tryNumber();
  }

  #race() {
    Output.raceResult();
    for (let i = 0; i < this.tryNumber; i++) {
      const racedCar = this.race.race();
      racedCar.forEach((car) => {
        Output.scoreByRace(car.getName(), car.getPosition());
      });
      Output.newLine();
    }
  }

  #printWinner() {
    const winners = this.race.getWinner();
    Output.winners(winners);
  }
}

const app = new App();
await app.play();
