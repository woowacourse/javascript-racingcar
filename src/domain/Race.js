import Car from "./Car.js";
import { RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";

class Race {
  #carList = [];

  constructor(nameList, attemptCount) {
    this.#carList = nameList.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  play() {
    for (let i = 0; i < this.attemptCount; i++) {
      this.executeTurn();
    }
  }

  executeTurn() {
    this.#carList.forEach((car) => {
      const randomNumber = getRandomNumber(
        RANDOM_NUMBER.MIN,
        RANDOM_NUMBER.MAX
      );

      if (randomNumber >= MOVE_CONDITION) {
        car.move();
      }
    });
  }
}

export default Race;
