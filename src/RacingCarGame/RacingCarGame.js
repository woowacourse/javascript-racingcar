import MESSAGE from "../constants/Message.js";
import OutputView from "../view/OutputView.js";
import SetGame from "./SetGame.js";
import StringParser from "../utils/StringParser.js";

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
    OutputView.printNewLine();
    OutputView.printAttemptTitle();
    this.#iterateAttempt();
    this.#findChampion();
    OutputView.printChampions(this.#champion);
  }

  #iterateAttempt() {
    // "실행결과" 출력
    for (let i = 0; i < this.#attempt; i++) {
      this.#cars.forEach((car) => {
        car.moveOn();
        OutputView.printCar(car);
      });
      OutputView.printNewLine();
    }
  }

  #findChampion() {
    const maxPosition = Math.max(
      ...this.#cars.map((car) => car.getInfo().position),
    );
    const result = this.#cars.filter(
      (car) => car.getInfo().position === maxPosition,
    );
    this.#champion = result.map((car) => car.getInfo().name);
  }
}

export default RacingCarGame;
