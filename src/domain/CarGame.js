const { movingDistance } = require("./MovementIndicator");
const makeRandomNumber = require("../util/RandomNumberMaker");
const { COMMA } = require("../constant/Constants");

class CarGame {
  #carStatus = new Map([]);

  initializeCarStatus = (carNames) => {
    carNames.forEach((name) => this.#carStatus.set(name, 0));
  };

  moveCar() {
    [...this.#carStatus.entries()].forEach(([name, count]) => {
      this.#carStatus.set(name, count + movingDistance(makeRandomNumber()));
    });

    return this.#carStatus;
  }

  findWinner() {
    const farthestDistance = Math.max(...this.#carStatus.values());
    const winnerInfo = [...this.#carStatus].filter(
      ([_, count]) => count === farthestDistance
    );

    return winnerInfo.map(([name]) => name).join(COMMA);
  }
}

module.exports = CarGame;
