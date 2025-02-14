import Car from "./Car.js";
import { LINE_BREAK, MOVE_CONDITION, OUTPUT_MESSAGE, RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import OutputView from "../views/OutputView.js";
class Race {
  #carList = [];

  constructor(nameList, attemptCount) {
    this.#carList = nameList.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  play() {
    OutputView.print(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < this.attemptCount; i++) {
      this.executeTurn();
      OutputView.print(LINE_BREAK);
    }

    const winners = this.getWinnerName();

    OutputView.print(`${OUTPUT_MESSAGE.WINNER} ${winners.join(", ")}`);
  }

  executeTurn() {
    this.#carList.forEach((car) => {
      const randomNumber = getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);

      this.checkMove(randomNumber, car);
      car.printStatus();
    });
  }

  checkMove(randomNumber, car) {
    if (randomNumber >= MOVE_CONDITION) {
      car.move();
    }
  }

  getWinnerName() {
    const winnerPosition = Math.max(...this.#carList.map((car) => car.position));
    const winnerCar = this.#carList.filter((car) => car.position === winnerPosition);

    const winnerName = winnerCar.map((car) => car.name);
    return winnerName;
  }

  get carList() {
    return this.#carList;
  }
}

export default Race;
