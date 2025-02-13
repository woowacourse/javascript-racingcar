import Car from "./Car.js";
import { OUTPUT_MESSAGE } from "./Const.js";
import Output from "./Output.js";
class Race {
  #cars;
  #count;

  constructor(names, count) {
    this.#cars = names.map((carName) => new Car(carName));
    this.#count = count;
  }

  raceCar() {
    const output = new Output();
    output.printLine(OUTPUT_MESSAGE.result);
    for (let i = 0; i < this.#count; i++) {
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
        winnerList = [car.name];
      } else if (car.position === maxNum) {
        winnerList.push(car.name);
      }
      return;
    });

    return winnerList;
  }
}

export default Race;
