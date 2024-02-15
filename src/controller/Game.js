import Input from '../view/Input.js';
import Output from '../view/Output.js';
import CarNamesValidator from '../utils/CarNamesValidator.js';
import TryCountValidator from '../utils/TryCountValidator.js';
import Random from '../utils/Random.js';
import Car from '../model/Car.js';

class Game {
  async startGame() {
    const cars = await this.errorHandler(this.getCars);
    const tryCount = await this.errorHandler(this.getTryCount);

    for (let i = 0; i < tryCount; i++) {
      this.playRound(cars);
    }

    Output.winnerResult(this.calculateWinner(cars));
  }

  async errorHandler(getFunc) {
    while (true) {
      try {
        const result = await getFunc();
        return result;
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  async getCars() {
    const carNames = await Input.inputCarName();
    const cars = carNames.split(',').map((car) => new Car(car));

    CarNamesValidator.isValidCount(cars);
    CarNamesValidator.isDuplicate(cars);

    return cars;
  }

  async getTryCount() {
    const tryCount = await Input.inputTryCount();

    TryCountValidator.isNaturalNumber(Number(tryCount));

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
