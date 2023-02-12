import { isMoving, randomNumberMaker } from "../Utils/ConvenientFunctions.js";
import { COMMA, FORWARD_VALUE } from "../Utils/Constants.js";
import Car from "./Car.js";
import OutputView from "../View/OutputView.js";
import { utils } from "../Utils/Utils.js";

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

  findWinner(statusValues) {
    const max = Math.max(
      ...statusValues.map((state) => state.getCarStatus()["position"]),
    );

    const winnerNames = statusValues
      .filter((state) => state.getCarStatus()["position"] === max)
      .map((constructor) => constructor.getCarStatus()["name"]);

    return [...winnerNames].join(COMMA);
  }

  showGameResult = () => {
    const statusValues = [...this.#carStatus.values()];

    OutputView.printResultMessage();

    this.showGameRound();

    OutputView.printWinner(this.findWinner(statusValues));

    utils.close();
  };

  showGameRound = () => {
    for (let idx = 0; idx < this.#round; idx++) {
      const currentCarStatus = this.cycleCarStatus();
      OutputView.printCarMovement(currentCarStatus);
    }
  };
}

export default CarGame;
