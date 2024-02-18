import { CAR_CONSTANTS } from '../Constants/Constants';

const { MIN_MOVE_THRESHOLD, MOVE_DISTANCE, INITIAL_DISTANCE } = CAR_CONSTANTS;

export default class Car {
  static maxDistance = INITIAL_DISTANCE;

  #name;

  #distance = INITIAL_DISTANCE;

  constructor(name) {
    this.#name = name;
  }

  move(randomNum) {
    if (randomNum >= MIN_MOVE_THRESHOLD) {
      this.#distance += MOVE_DISTANCE;
    }
    this.#updateMaxDistance();
  }

  #updateMaxDistance() {
    if (this.#distance > Car.maxDistance) {
      Car.maxDistance = this.#distance;
    }
  }

  isWinner() {
    if (Car.maxDistance === this.#distance) {
      return true;
    }
    return false;
  }

  getInfo() {
    return { name: this.#name, distance: this.#distance };
  }
}
