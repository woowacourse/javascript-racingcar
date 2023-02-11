const { isMoving, randomNumberMaker } = require("./MovementIndicator");
const { COMMA, FORWARD_VALUE } = require("./Utils/Constants");
const Car = require("./Car");
const {
  printResultMessage,
  printCarMovement,
  printWinner,
} = require("./UI/OutputView");
const Utils = require("./Utils/Utils");

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
    printResultMessage();

    this.showGameRound();
    printWinner(this.findWinner(statusValues));

    Utils.close();
  };

  showGameRound = () => {
    for (let idx = 0; idx < this.#round; idx++) {
      const currentCarStatus = this.cycleCarStatus();
      printCarMovement(currentCarStatus);
    }
  };
}

module.exports = CarGame;
