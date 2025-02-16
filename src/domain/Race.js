import { OUTPUT_MESSAGE } from "../constants/message.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { CAR } from "../constants/constants.js";

export default class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  runRace() {
    console.log(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < this.tryCount; i++) {
      this.gameRound();
    }
  }

  gameRound() {
    this.cars.forEach((car) => {
      if (this.isMove(getRandomNumber())) car.move();
      console.log(
        `${car.name} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(car.position)}`
      );
    });
    console.log("");
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
