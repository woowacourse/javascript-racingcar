import { isMoving, randomNumberMaker } from "../Utils/ConvenientFunctions.js";
import { COMMA, FORWARD_VALUE } from "../Utils/Constants.js";
import Car from "./Car.js";

class CarGame {
  #carStatus;
  #round;

  constructor() {
    this.#carStatus = new Map();
  }

  initializeGameStatus = (cars, round) => {
    cars.forEach((car) => this.#carStatus.set(car, new Car(car)));
    this.#round = round;
  };

  cycleCarStatus() {
    for (const conostructor of this.#carStatus.values()) {
      const randomNumber = randomNumberMaker();

      if (isMoving(randomNumber)) conostructor.move(FORWARD_VALUE);
    }

    return this.#carStatus.values();
  }

  getMaxPosition(statusValues) {
    return Math.max(
      ...statusValues.map((state) => state.getCarStatus()["position"]),
    );
  }

  getWinnerNames(statusValues, maxPosition) {
    return statusValues
      .filter((state) => state.getCarStatus()["position"] === maxPosition)
      .map((constructor) => constructor.getCarStatus()["name"])
      .join(COMMA);
  }

  getStatusValuesArray = () => {
    return [...this.#carStatus.values()];
  };

  getEachGameRoundResult = () => {
    let roundResult = [];

    for (let idx = 0; idx < this.#round; idx++) {
      const currentCarStatus = this.cycleCarStatus();
      roundResult = [...roundResult, currentCarStatus];
    }

    return roundResult;
  };
}

export default CarGame;
