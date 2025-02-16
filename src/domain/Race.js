import { OUTPUT_MESSAGE } from "../constants/message.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { CAR } from "../constants/constants.js";

export default class Race {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
  }

  runRace() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.gameRound();
    }
  }

  getRaceResult() {
    const results = [];
    for (let i = 0; i < this.#tryCount; i++) {
      results.push(this.getGameRoundResult());
    }
    return results;
  }

  getGameRoundResult() {
    const result = [];
    this.#cars.forEach((car) => {
      if (this.isMove(getRandomNumber())) car.move();
      result.push({ name: car.getName(), position: car.getPosition() });
    });
    return result;
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
