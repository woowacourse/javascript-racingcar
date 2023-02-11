const { movingDistance } = require("./MovementIndicator");
const makeRandomNumber = require("../Utils/RandomNumberMaker");
const { COMMA } = require("../Constants/Constants");

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

  moveCar(carStatus) {
    for (const [name, count] of Object.entries(carStatus)) {
      const randomNumber = makeRandomNumber();
      carStatus[name] = count + movingDistance(randomNumber);
    }
    this.setCarStatus(carStatus);
    return carStatus;
  }

  findWinner(carStatus) {
    const farthestDistance = Math.max(...Object.values(carStatus));
    const winnerInfo = Object.entries(carStatus).filter(
      ([_, count]) => count === farthestDistance
    );

    return winnerInfo.map(([name]) => name).join(COMMA);
  }
}

module.exports = CarGame;
