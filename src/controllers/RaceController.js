import Console from "../utils/Console.js";
import Car from "../domains/Car.js";
import randomNumber from "../utils/randomNumber.js";
import Output from "../views/Output.js";

class RaceController {
  #cars = [];
  #tryCount = 0;

  constructor(names, tryCount) {
    this.#cars = names.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  race() {
    for (let i = 1; i <= this.#tryCount; i++) {
      this.#round();
      Console.printLineBreak();
    }
  }

  getWinners() {
    const countArray = this.#cars.map((car) => car.count);
    const maxCount = Math.max(...countArray);

    const winners = this.#cars.filter((car) => car.count === maxCount);
    return winners.map((winner) => winner.name);
  }

  #round() {
    this.#cars.forEach((car) => {
      car.move(randomNumber());
      Output.printRace(car.name, car.count);
    });
  }
}

export default RaceController;
