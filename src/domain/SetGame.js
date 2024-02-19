import Car from "./Car.js";
import { validateCarName } from "./Validator.js";

class SetGame {
  #carArray;
  #attempt;
  #controller;

  constructor(controller) {
    this.#controller = controller;
    this.#carArray = [];
  }

  async init() {
    await this.#setCarName();
    await this.#setAttempt();
  }
  async #setCarName() {
    while (true) {
      try {
        await this.#createCars();
        break;
      } catch (error) {
        continue;
      }
    }
  }

  async #createCars() {
    const carNames = await this.#controller.setCarName();
    carNames.forEach((carName) => {
      validateCarName(carName);

      const newCar = new Car(carName);
      this.#carArray.push(newCar);
    });
  }

  async #setAttempt() {
    while (true) {
      try {
        this.#attempt = await this.#controller.setAttempt();
        break;
      } catch (error) {
        continue;
      }
    }
  }

  getGameInputs() {
    return { cars: this.#carArray, attempt: this.#attempt };
  }
}

export default SetGame;
