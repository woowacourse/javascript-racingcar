import Input from '../view/Input.js';
import Output from '../view/Output.js';
import CarValidator from '../utils/CarValidator.js';
import TryCountValidator from '../utils/TryCountValidator.js';
import Console from '../utils/Console.js';
import Random from '../utils/Random.js';
import Car from '../model/Car.js';
import Condition from '../constant/Condition.js';
import Message from '../constant/Message.js';

const { SEPERATOR } = Condition;
const { OUTPUT } = Message;

class Game {
  async startGame() {
    const cars = await Console.retryUntilSuccess(this.createCarsFromInput);
    const tryCount = await Console.retryUntilSuccess(this.getTryCountFromInput);

    this.playGame(cars, tryCount);

    Output.winnerResult(this.calculateWinner(cars));
  }

  async createCarsFromInput() {
    const carNames = await Input.carName();
    const cars = carNames.split(SEPERATOR).map((car) => new Car(car));

    CarValidator.isValidCount(cars);
    CarValidator.isNameDuplicate(cars);

    return cars;
  }

  async getTryCountFromInput() {
    const tryCount = await Input.tryCount();

    TryCountValidator.isNaturalNumber(Number(tryCount));

    return tryCount;
  }

  playGame(cars, tryCount) {
    console.log(OUTPUT.RESULT);

    for (let i = 0; i < tryCount; i++) {
      this.playRound(cars);
    }
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
