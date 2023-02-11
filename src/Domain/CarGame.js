const { isMoving, randomNumberMaker } = require("./MovementIndicator");

const { COMMA } = require("./Utils/Constants");

class CarGame {
  #carStatus;

  constructor() {
    this.#carStatus = {};
  }

  getCarStatus() {
    return this.#carStatus;
  }

  setCarStatus(carStatus) {
    this.#carStatus = carStatus;
  }

  initializeCarStatus = (cars) => {
    cars.forEach((car) => (this.#carStatus[car] = 0));
  };

  cycleCarStatus(carStatus) {
    for (const [name, count] of Object.entries(carStatus)) {
      const randomNumber = randomNumberMaker();
      if (isMoving(randomNumber)) carStatus[name] = count + 1;
    }
    this.setCarStatus(carStatus);
    return carStatus;
  }

  findWinner(carStatus) {
    const max = Math.max(...Object.values(carStatus));
    const winnerInfo = Object.entries(carStatus).filter(
      ([_, count]) => count === max
    );

    return winnerInfo.map(([name]) => name).join(COMMA);
  }
}

module.exports = CarGame;
