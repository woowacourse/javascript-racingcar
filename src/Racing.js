import getRandomNumber0to9 from './utils/getRandomNumber0to9.js';
import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';

class Racing {
  #carList;
  #count;

  constructor(carList, count) {
    this.#carList = carList;
    this.#count = count;
  }

  getCarList() {
    return this.#carList;
  }

  getWinner() {
    const maxPosition = Math.max(...this.#carList.map((car) => car.getPosition()));
    return this.#carList
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName())
      .join(`${SEPARATOR} `);
  }

  start() {
    console.log(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < this.#count; i++) {
      this.#raceOnce();
      console.log();
    }
    console.log(`${GAME_MESSAGE.WINNER} ${this.getWinner()}`);
  }

  #raceOnce() {
    this.#carList.forEach((car) => {
      car.move(getRandomNumber0to9());
      console.log(car.getRacingStatus());
    });
  }
}

export default Racing;
