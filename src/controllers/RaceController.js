import Console from "../utils/Console.js";
import Car from "../domains/Car.js";
import getRandomNumber from "../utils/getRandomNumber.js";
import Output from "../views/Output.js";

class RaceController {
  #cars = [];
  #tryCount = 0;

  constructor(carNames, tryCount) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#tryCount = tryCount;
  }

  race() {
    for (let cnt = 1; cnt <= this.#tryCount; cnt++) {
      this.#playRound();
      Console.printLineBreak();
    }
  }

  getWinners() {
    const maxCount = this.#getMaxCount();
    const winners = this.#cars.filter((car) => car.count === maxCount);
    return winners.map((winner) => winner.name);
  }

  #getMaxCount() {
    const countArray = this.#cars.map((car) => car.count);
    return Math.max(...countArray);
  }

  #playRound() {
    this.#cars.forEach((car) => {
      car.move(getRandomNumber());
      Output.printRace(car.name, car.count);
    });
  }
}

export default RaceController;
