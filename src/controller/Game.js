import Input from '../view/Input.js';
import Output from '../view/Output.js';
import CarNamesValidator from '../utils/CarNamesValidator.js';
import TryCountValidator from '../utils/TryCountValidator.js';
import Random from '../utils/Random.js';
import Car from '../model/Car.js';

class Game {
  async startGame() {
    const cars = await this.getCars();
    const tryCount = await this.getTryCount();

    for (let i = 0; i < tryCount; i++) {
      this.playRound(cars);
    }

    Output.winnerResult(this.calculateWinner(cars));
  }

  async getCars() {
    while (true) {
      try {
        const carNames = await Input.inputCarName();
        const cars = carNames.split(',').map((car) => new Car(car));
        return this.validateCars(cars);
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  async getTryCount() {
    while (true) {
      try {
        const tryCount = await Input.inputTryCount();
        return this.validateTryCount(Number(tryCount));
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  validateCars(cars) {
    CarNamesValidator.isValidCount(cars);
    CarNamesValidator.isDuplicate(cars);
    return cars;
  }

  validateTryCount(tryCount) {
    TryCountValidator.isNaturalNumber(tryCount);
    return tryCount;
  }

  playRound(cars) {
    this.calculateAdvance(cars);
    Output.roundResult(cars);
  }

  calculateAdvance(cars) {
    cars.forEach((car) => {
      const randomNumber = Random.pickNumberZeroToNine();
      car.updateAdvance(randomNumber);
    });
  }

  calculateWinner(cars) {
    const maxAdvance = Math.max(...cars.map((car) => car.getAdvance()));
    return cars.filter((car) => car.getAdvance() === maxAdvance);
  }
}

export default Game;
