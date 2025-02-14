import Car from "./Car.js";
import { MOVE_CONDITION, RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
class Race {
  #carList = [];

  constructor(nameList) {
    this.#carList = nameList.map((name) => new Car(name));
  }

  executeTurn() {
    return this.#carList.map((car) => {
      const randomNumber = getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
      this.checkMove(randomNumber, car);
      return [car.name, car.position];
    });
}


  checkMove(randomNumber, car) {
    if (randomNumber >= MOVE_CONDITION) {
      car.move();
    }
  }

  getWinnerName() {
    const winnerPosition = Math.max(...this.#carList.map((car) => car.position));
    const winnerCar = this.#carList.filter((car) => car.position === winnerPosition);

    const winnerName = winnerCar.map((car) => car.name);
    return winnerName;
  }

  get carList() {
    return this.#carList;
  }
}

export default Race;
