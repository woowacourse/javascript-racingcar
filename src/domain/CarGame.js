const movingDistance = require("./MovementIndicator");
const randomNumberBetween = require("../util/RandomNumberMaker");
const { COMMA, RANDOM_NUMBER_RANGE } = require("../constant/Constants");
const { MIN, MAX } = RANDOM_NUMBER_RANGE;

class CarGame {
  #carStatus = new Map([]);

  initializeCarStatus(carNames) {
    carNames.forEach((name) => this.#carStatus.set(name, 0));
  }

  moveCar() {
    [...this.#carStatus.entries()].forEach(([name, count]) => {
      this.#carStatus.set(
        name,
        count + movingDistance(randomNumberBetween(MIN, MAX))
      );
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
