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
}

module.exports = RacingGame;
