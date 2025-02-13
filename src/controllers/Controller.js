import Input from "../views/Input.js";
import Output from "../views/Output.js";
import Console from "../utils/Console.js";
import Car from "../models/Car.js";
import randomNumber from "../utils/randomNumber.js";

class Controller {
  #carsInstance = [];

  /**
   * 자동차 경주 전체 로직 관리
   */
  async play() {
    const { names, tryCount } = await this.#readAndValidateInputs();

    this.#carsInstance = names.map((name) => new Car(name));
    Output.printRaceStart();
    this.#race(tryCount);

    Output.printWinner(this.#getWinners());
  }

  async #readAndValidateInputs() {
    const names = await Input.carName();
    const tryCount = await Input.tryCount();

    return { names, tryCount };
  }

  #race(tryCount) {
    for (let i = 1; i <= tryCount; i++) {
      this.#carsInstance.forEach((carInstance) => {
        carInstance.move(randomNumber());
        Output.printRace(carInstance.name, carInstance.count);
      });
      Console.printLineBreak();
    }
  }

  #getWinners() {
    const countArray = this.#carsInstance.map((carInstance) => carInstance.count);
    const maxCount = Math.max(...countArray);

    const winners = this.#carsInstance
      .filter((carInstance) => carInstance.count === maxCount)
      .map((carInstance) => carInstance.name);

    return winners;
  }
}

export default Controller;
