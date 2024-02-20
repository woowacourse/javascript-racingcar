import { printCar, printNewLine } from "../view/OutputView.js";

class RacingCarGame {
  #carArray;
  #attempt;

  constructor(carArray, attempt) {
    this.#carArray = carArray;
    this.#attempt = attempt;
  }

  play() {
    this.#iterateAttempt();
    return this.#getChampion();
  }

  #iterateAttempt() {
    for (let i = 0; i < this.#attempt; i++) {
      this.#carArray.forEach((car) => {
        car.moveOn();
        printCar(car);
      });
      printNewLine();
    }
  }

  #getChampion() {
    const champion = this.#findChampion();
    return champion.map((car) => car.getInfo().name);
  }

  #findChampion() {
    const maxPosition = Math.max(
      ...this.#carArray.map((car) => car.getInfo().position),
    );
    const result = this.#carArray.filter(
      (car) => car.getInfo().position === maxPosition,
    );

    return result;
  }
}

export default RacingCarGame;
