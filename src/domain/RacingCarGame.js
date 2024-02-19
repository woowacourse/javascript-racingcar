import SetGame from "./SetGame.js";
import RacingController from "../controller/RacingController.js";

class RacingCarGame {
  #cars;
  #attempt;
  #champion;
  #controller;

  constructor() {
    this.#controller = new RacingController();
    this.#champion = [];
  }

  async init() {
    const setGame = new SetGame(this.#controller);
    await setGame.init();
    this.#cars = setGame.getGameInputs().cars;
    this.#attempt = setGame.getGameInputs().attempt;
    this.#play();
  }

  async #play() {
    this.#iterateAttempt();
    this.#setChampion();
    this.#controller.outputChampion(this.#champion);
  }

  #iterateAttempt() {
    for (let i = 0; i < this.#attempt; i++) {
      this.#cars.forEach((car) => {
        car.moveOn();
      });
      this.#controller.outputCars(this.#cars, i);
    }
  }

  #setChampion() {
    const champion = this.#findChampion();
    this.#champion = champion.map((car) => car.getInfo().name);
  }

  #findChampion() {
    const maxPosition = Math.max(
      ...this.#cars.map((car) => car.getInfo().position),
    );
    const result = this.#cars.filter(
      (car) => car.getInfo().position === maxPosition,
    );

    return result;
  }
}

export default RacingCarGame;
