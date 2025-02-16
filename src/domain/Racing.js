import getRandomNumber0to9 from '../utils/getRandomNumber0to9.js';
import { SEPARATOR } from '../constants/systemMessages.js';

class Racing {
  #carList;

  constructor(carList) {
    this.#carList = carList;
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

  raceOnce() {
    this.#carList.forEach((car) => {
      car.move(getRandomNumber0to9());
    });

    return this.#carList.map((car) => car.getRacingStatus());
  }
}

export default Racing;
