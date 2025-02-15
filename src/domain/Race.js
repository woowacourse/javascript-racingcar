import Car from "./Car.js";
import { OUTPUT_MESSAGE } from "../const.js";
import Output from "../ui/Output.js";
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
        car.tryMove();
        output.printCarPosition(car);
      });
      console.log();
    }
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
}

export default Race;
