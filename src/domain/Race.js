import Car from "./Car.js";
import { MOVE_CONDITION, RANDOM_NUMBER } from "../constants/Constants.js";
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

      this.checkMove(randomNumber, car);
    });
  }

  checkMove(randomNumber, car) {
    if (randomNumber >= MOVE_CONDITION) {
      car.move();
    }
  }

  get carList() {
    return this.#carList;
  }
}

export default Race;
