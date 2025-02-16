import Car from "./Car.js";
import { getRandomIntBetween } from "../util.js";
class Race {
  #cars;
  #raceCount;
  #raceRecord;

  constructor(names, raceCount, raceRecord) {
    this.#cars = names.map((raceCarName) => new Car(raceCarName));
    this.#raceCount = raceCount;
    this.#raceRecord = raceRecord;
  }

  raceCar() {
    for (let i = 0; i < this.#raceCount; i++) {
      this.#raceOnce();
    }
  }

  #raceOnce() {
    this.#cars.forEach((car) => {
      car.tryMove(getRandomIntBetween(0, 9));
      this.#raceRecord.recordStep(car);
    });
  }
}

export default Race;
