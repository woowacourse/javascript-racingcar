import OPTIONS from '../constant/options.js';
import random from '../utils/random.js';
import Cars from './car/Cars.js';

class RacingGame {
  #cars;

  #tryCount;

  #middleResults;

  #finalWinners;

  constructor() {
    this.#cars = new Cars();
  }

  setCars(carNames) {
    this.#cars.makeCars(carNames);
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  playRacing() {
    this.#middleResults = Array(this.#tryCount)
      .fill()
      .map(() => {
        this.#playOneTurn();
        return this.#cars.getLocations();
      });
  }

  #playOneTurn() {
    const canMoveCars = this.#cars.getCars().map(() => {
      const movingNumber = random.inRange(OPTIONS.CAR.minMoveNumber, OPTIONS.CAR.maxMoveNumber);
      return movingNumber >= OPTIONS.CAR.leastMoveCondition;
    });

    this.#cars.moveCars(canMoveCars);
  }

  findWinners() {
    const maxLocation = this.#findMaxLocation();
    const isMaxLocation = (car) => car.getLocation() === maxLocation;

    const winners = this.#cars
      .getCars()
      .filter((car) => isMaxLocation(car))
      .map((car) => car.getName());

    this.#finalWinners = winners;
  }

  #findMaxLocation() {
    return Math.max(...this.#cars.getCars().map((car) => car.getLocation()));
  }

  getMiddleResults() {
    return this.#middleResults;
  }

  getFinalWinners() {
    return this.#finalWinners;
  }
}

export default RacingGame;
