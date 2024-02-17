import Input from "./view/Input.js";
import Move from "./domain/Move.js";
import Output from "./view/Output.js";
import { count } from "./util/count.js";
import { MESSAGES } from "./constant/constant.js";

export default class Controller {
  #moveInstanceList = [];

  async start() {
    const { carNames, tryNumber } = await this.input();
    carNames.map((carName) => this.#moveInstanceList.push(new Move(carName)));
    this.calculateResult(tryNumber);
    this.printResult(tryNumber);
    const winner = this.calculateWinner();
    Output.printWinner(winner);
  }

  async input() {
    const carNames = await Input.inputCarNames();
    const tryNumber = await Input.inputTryInput();
    return { carNames, tryNumber };
  }

  printResult(tryNumber) {
    console.log(MESSAGES.RESULT);
    for (let i = 0; i < tryNumber; i++) {
      this.#moveInstanceList.forEach((move) => {
        Output.printMove(move.getInfo(), i + 1);
      });
      console.log("");
    }
  }

  calculateResult(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.#moveInstanceList.forEach((move) => {
        move.move();
      });
    }
  }

  calculateMaxMove() {
    return Math.max(
      ...this.#moveInstanceList.map((moveInstance) => count(moveInstance.getInfo().moveTrace))
    );
  }

  calculateWinner() {
    const maxMove = this.calculateMaxMove();
    const result = this.#moveInstanceList
      .filter((moveInstance) => count(moveInstance.getInfo().moveTrace) === maxMove)
      .map((moveInstance) => moveInstance.getInfo().carName);
    return result;
  }
}
