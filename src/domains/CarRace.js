import { RULES } from "../constants/car-race";
import deepFreeze from "../utils/deepFreeze";
import Random from "../utils/random";
import Car from "./Car";

class CarRace {
  #cars;

  constructor(cars) {
    this.#cars = this.#initRaceCars(cars);
  }

  #initRaceCars(cars) {
    const spliitedCars = cars.split(",").map((carName) => carName.trim());
    return spliitedCars.map((carName) => new Car(carName));
  }

  #getRandomNumber() {
    return Random.pickNumberInRange(
      RULES.minRandomNumber,
      RULES.maxRandomNumber
    );
  }

  #findMaxPosition() {
    const maxPositionCar = this.#cars.reduce(
      (currMaxPositionCar, car) =>
        currMaxPositionCar.isAheadOf(car) ? currMaxPositionCar : car,
      this.#cars[0]
    );

    return maxPositionCar;
  }

  #calculateWinners(maxPositionCar) {
    return this.#cars
      .filter((car) => maxPositionCar.isSamePosition(car))
      .map((winner) => winner.name);
  }

  makeRoundResult() {
    const roundResult = this.#cars.reduce((accResult, currCar) => {
      const number = this.#getRandomNumber();
      currCar.move(number);
      return {
        ...accResult,
        [currCar.name]: currCar.position,
      };
    }, {});

    return deepFreeze(roundResult);
  }

  judgeWinners() {
    const maxPositionCar = this.#findMaxPosition();
    const winners = this.#calculateWinners(maxPositionCar);

    return deepFreeze(winners);
  }
}

export default CarRace;
