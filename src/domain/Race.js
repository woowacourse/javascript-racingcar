import Car from "./Car.js";
import { OUTPUT_MESSAGE } from "../const.js";
import Output from "../ui/Output.js";
import { getRandomIntBetween } from "../util.js";
class Race {
  #cars;
  #raceCount;

  constructor(names, raceCount) {
    this.#cars = names.map((raceCarName) => new Car(raceCarName));
    this.#raceCount = raceCount;
  }

  raceCar() {
    const output = new Output();
    output.printLine(OUTPUT_MESSAGE.result);
    for (let i = 0; i < this.#raceCount; i++) {
      this.#cars.forEach((car) => {
        car.tryMove(getRandomIntBetween(0, 9));
        output.printCarPosition(car);
      });
      console.log();
    }
  }

  getWinner() {
    return this.#cars.reduce(
      (acc, car) => {
        if (car.position > acc.maxNum) {
          return { maxNum: car.position, winners: [car.raceCarName] };
        }
        if (car.position === acc.maxNum) {
          acc.winners.push(car.raceCarName);
        }
        return acc;
      },
      { maxNum: 0, winners: [] }
    ).winners;
  }
}

export default Race;
