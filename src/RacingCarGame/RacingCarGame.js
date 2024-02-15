import MESSAGE from "../constants/Message.js";
import OutputView from "../view/OutputView.js";
import SetGame from "./SetGame.js";
import Car from "./Car.js";
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
    this.#printAttemptTitle();
    this.#iterateAttempt();
    this.#findChampion();
    this.#printChampion();
  }

  #iterateAttempt() {
    // "실행결과" 출력
    for (let i = 0; i < this.#attempt; i++) {
      this.#cars.forEach((car) => {
        car.moveOn();
        this.#printCarInfo(car);
      });
      this.#printNewLine();
    }
  }

  #printAttemptTitle() {
    OutputView.printQuery(MESSAGE.printAttemptTitle);
  }

  #printCarInfo(car) {
    OutputView.printCar(car);
  }

  #printNewLine() {
    OutputView.newLine();
  }

  #findChampion() {
    const maxPosition = Math.max(
      ...this.#cars.map((car) => car.info().position),
    );
    const result = this.#cars.filter(
      (car) => car.info().position === maxPosition,
    );
    this.#champion = result.map((car) => car.info().name);
  }

  #printChampion() {
    OutputView.printChampions(StringParser.concatElements(this.#champion));
  }
}

export default RacingCarGame;
