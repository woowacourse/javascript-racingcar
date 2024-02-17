import Input from "./view/Input.js";
import Move from "./Move.js";
import Output from "./view/Output.js";
import { count } from "./util/count.js";
import { MESSAGES } from "./constant/constant.js";
import { randomNum } from "./util/random.js";

class RaceController {
  #moveInstanceList = [];

  async race() {
    const { cars, tryNumber } = await this.input();
    cars.map((car) => this.#moveInstanceList.push(new Move(car)));
    this.calculateResult(tryNumber);
    this.printResult(tryNumber);
    const winner = this.calculateWinner();
    Output.printWinner(winner);
  }

  async input() {
    const cars = await Input.carNameInput();
    const tryNumber = await Input.tryInput();
    return { cars, tryNumber };
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
        move.move(randomNum());
      });
    }
  }

  calculateMaxMove() {
    const maxMove = Math.max(
      ...this.#moveInstanceList.map((moveInstance) =>
        count(moveInstance.getInfo().moveTrace)
      )
    );
    return maxMove;
  }

  calculateWinner() {
    const maxMove = this.calculateMaxMove();
    const result = this.#moveInstanceList
      .filter(
        (moveInstance) => count(moveInstance.getInfo().moveTrace) === maxMove
      )
      .map((moveInstance) => moveInstance.getInfo().carName);
    return result;
  }
}

export default RaceController;
