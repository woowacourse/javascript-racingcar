const Car = require('./Car');
const OutputView = require('./UI/OutputView');

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

  findWinner() {
    const maxPosition = Math.max(...this.carList.map((car) => car.position));
    const winners = this.carList.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }

  playGame() {
    OutputView.printResultMessage();
    OutputView.printResult(this);
    while (this.attempts > 0) {
      this.moveAllCars();
      OutputView.printResult(this);
    }
    OutputView.printWinners(this.findWinner());
  }
}

module.exports = RacingGame;
