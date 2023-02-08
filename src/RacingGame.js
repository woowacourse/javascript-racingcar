const Console = require('./UI/Console');
const Car = require('./Car');

class RacingGame {
  constructor() {}

  setCarList(carNames) {
    this.carList = carNames.map((carName) => new Car(carName));
  }

  setAttempts(attempts) {
    this.attempts = attempts;
  }

  moveAllCars() {
    if (this.attempts === 0) return;
    this.attempts -= 1;
    this.carList.forEach((car) => car.move());
  }
}

module.exports = RacingGame;
