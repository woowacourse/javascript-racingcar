import MESSAGE from "../constants/Message.js";
import OutputView from "../view/OutputView.js";
import SetGame from "./SetGame.js";

class RacingCarGame {
  #cars;
  #attempt;

  constructor() {
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
}

export default RacingCarGame;
