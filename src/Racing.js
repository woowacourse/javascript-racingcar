import getRandomNumber0to9 from './utils/getRandomNumber0to9.js';
import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';

class Racing {
  carList;
  count;

  constructor(carList, count) {
    this.carList = carList;
    this.count = count;
  }

  getWinner() {
    const maxPosition = Math.max(...this.carList.map((car) => car.position));
    return this.carList
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(`${SEPARATOR} `);
  }

  start() {
    console.log(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < this.count; i++) {
      this.raceOnce();
      console.log();
    }
    console.log(`${GAME_MESSAGE.WINNER} ${this.getWinner()}`);
  }

  raceOnce() {
    this.carList.forEach((car) => {
      car.move(getRandomNumber0to9());
      console.log(car.getRacingStatus());
    });
  }
}

export default Racing;
