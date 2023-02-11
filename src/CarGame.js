const { isMoving, randomNumberMaker } = require("./MovementIndicator");
const { COMMA } = require("./Utils/Constants");
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
      if (isMoving(randomNumber)) conostructor.move(1);
    }

    return this.#carStatus.values();
  }

  findWinner() {
    const max = Math.max(
      ...[...this.#carStatus.values()].map(
        (state) => state.getCarStatus()["position"],
      ),
    );
    const winnerInfo = [...this.#carStatus.values()].filter(
      (state) => state.getCarStatus()["position"] === max,
    );

    return [...winnerInfo]
      .map((constructor) => constructor.getCarStatus()["name"])
      .join(COMMA);
  }

  showGameResult = () => {
    printResultMessage();
    this.showGameRound();
    printWinner(this.findWinner());
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
