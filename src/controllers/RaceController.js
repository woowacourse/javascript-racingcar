import Console from "../utils/Console.js";
import Car from "../models/Car.js";
import randomNumber from "../utils/randomNumber.js";
import Output from "../views/Output.js";

class RaceController {
  #carsInstance = [];
  #tryCount = 0;

  constructor(names, tryCount) {
    this.#carsInstance = names.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  race() {
    for (let i = 1; i <= this.#tryCount; i++) {
      this.#round();
      Console.printLineBreak();
    }
  }

  getWinners() {
    const countArray = this.#carsInstance.map((carInstance) => carInstance.count);
    const maxCount = Math.max(...countArray);

    const winnersInstance = this.#carsInstance.filter((carInstance) => carInstance.count === maxCount);
    return winnersInstance.map((winnerInstance) => winnerInstance.name);
  }

  #round() {
    this.#carsInstance.forEach((carInstance) => {
      carInstance.move(randomNumber());
      Output.printRace(carInstance.name, carInstance.count);
    });
  }
}

export default RaceController;
