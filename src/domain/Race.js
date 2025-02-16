import Car from "./Car.js";
import { MOVE_CONDITION, RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
class Race {
  #carList = [];

  constructor(carList) {
    this.#carList = carList
  }

  executeTurn() {
    return this.#carList.map((car) => {
      const randomNumber = getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
      if(this.checkMove(randomNumber))car.move();
      return {name:car.name, position:car.position};
    });
}

  checkMove(randomNumber) {
    return randomNumber >= MOVE_CONDITION;
  }

  getWinnerName() {
    const winnerPosition = Math.max(...this.#carList.map((car) => car.position));
    const winnerCar = this.#carList.filter((car) => car.position === winnerPosition);

    const winnerName = winnerCar.map((car) => car.name);
    return winnerName;
  }
}

export default Race;
