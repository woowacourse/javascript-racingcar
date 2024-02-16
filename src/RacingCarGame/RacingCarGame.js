import { concatElements } from "../utils/StringParser.js";
import SetGame from "./SetGame.js";
import {
  printChampions,
  printCar,
  printNewLine,
  printAttemptTitle,
} from "../view/OutputView.js";

class RacingCarGame {
  #cars;
  #attempt;
  #champion;

  constructor() {
    this.#champion = [];
    this.#init();
  }

  async #init() {
    const setGame = new SetGame();
    await setGame.init();
    this.#cars = setGame.get().cars;
    this.#attempt = setGame.get().attempt;
    this.#play();
  }

  async #play() {
    printNewLine();
    printAttemptTitle();
    this.#iterateAttempt();
    this.#setChampion();
    printChampions(concatElements(this.#champion));
  }

  #iterateAttempt() {
    for (let i = 0; i < this.#attempt; i++) {
      this.#cars.forEach((car) => {
        car.moveOn();
        printCar(car);
      });
      printNewLine();
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
