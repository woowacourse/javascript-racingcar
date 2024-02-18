import Input from "../view/Input.js";
import Output from "../view/Output.js";
import CarValidator from "../domain/validator/CarValidator.js";
import TryCountValidator from "../domain/validator/TryCountValidator.js";
import Console from "../utils/Console.js";
import Random from "../utils/Random.js";
import Car from "../domain/Car.js";
import Condition from "../constant/Condition.js";
import Message from "../constant/Message.js";

const { RANDOM } = Condition;
const { OUTPUT } = Message;

class Game {
  async startGame() {
    const cars = await Console.errorHandler(this.getCars);
    const tryCount = await Console.errorHandler(this.getTryCount);

    this.playGame(cars, tryCount);

    Output.winnerResult(this.calculateWinner(cars));
  }

  async getCars() {
    const carNames = await Input.carName();
    const cars = carNames.split(",").map((car) => new Car(car));

    CarValidator.validCount(cars);
    CarValidator.duplicateName(cars);

    return cars;
  }

  async getTryCount() {
    const tryCount = await Input.tryCount();

    TryCountValidator.naturalNumber(Number(tryCount));

    return tryCount;
  }

  playGame(cars, tryCount) {
    Output.message(OUTPUT.RESULT);

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
      const randomNumber = Random.pickNumber(RANDOM.MIN, RANDOM.MAX);
      car.updateAdvance(randomNumber);
    });
  }

  calculateWinner(cars) {
    const maxAdvance = Math.max(...cars.map((car) => car.getAdvance()));
    return cars.filter((car) => car.getAdvance() === maxAdvance);
  }
}

export default Game;
