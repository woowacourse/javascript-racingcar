import Car from "./Car.js";
import { MOVE_THRESHOLD, OUTPUT_MESSAGE } from "../Const.js";
import Output from "../ui/Output.js";
import { getRandomNumber } from "../Util.js";
class Race {
  #cars;
  #raceCount;
  #moveResult;

  constructor(names, raceCount) {
    this.#cars = names.map((raceCarName) => new Car(raceCarName));
    this.#raceCount = raceCount;
    this.#moveResult = "";
  }

  #tryMove(car) {
    const randomNumber = getRandomNumber();
    if (randomNumber >= MOVE_THRESHOLD) {
      car.moveOneStep();
    }
  }

  getMoveResult() {
    return this.#moveResult;
  }

  getWinner() {
    let maxNum = 0;
    let winnerList = [];

    this.#cars.forEach((car) => {
      if (car.position > maxNum) {
        maxNum = car.position;
        winnerList = [car.raceCarName];
      } else if (car.position === maxNum) {
        winnerList.push(car.raceCarName);
      }
    });
    return winnerList;
  }

  raceCar() {
    const output = new Output();
    output.printLine(OUTPUT_MESSAGE.result);
    for (let i = 0; i < this.#raceCount; i++) {
      this.#cars.forEach((car) => {
        this.#tryMove(car);
        this.#moveResult += output.carPosition(car) + "\n";
      });
      this.#moveResult += "\n";
    }
  }
}

export default Race;
