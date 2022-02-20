import { RULES } from '../constants/index.js';
import Car from './Car.js';

class RacingCarGameModel {
  #racingCarList = [];

  #racingCount = 0;

  setRacingCarList(carNameList) {
    this.#racingCarList = carNameList.map((carName) => new Car(carName));
  }

  getRacingCarList() {
    return this.#racingCarList;
  }

  setRacingCount(racingCount) {
    this.#racingCount = racingCount;
  }

  getRacingCount() {
    return this.#racingCount;
  }

  resetGameState() {
    this.#racingCarList = [];
    this.#racingCount = 0;
  }

  getFinalWinner() {
    const maxDistance = this.getMaxDistance();
    const winnerList = this.getWinnerList(maxDistance);
    return winnerList.join(RULES.WINNER_LIST_SEPERATOR);
  }

  getMaxDistance() {
    const distance = this.#racingCarList.map((car) => car.getDistance());
    const maxDistance = Math.max(...distance);

    return maxDistance;
  }

  getWinnerList(maxDistance) {
    return this.#racingCarList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }
}

export default RacingCarGameModel;
