import Input from "../views/Input.js";
import Output from "../views/Output.js";
import Car from "../domains/Car.js";
import validateCarNames from "../validations/validateCarNames.js";
import getValidInput from "../utils/getValidInput.js";
import validateTryCount from "../validations/validateTryCount.js";
import getWinners from "../utils/getWinners.js";
import getRandomNumber from "../utils/getRandomNumber.js";
import Console from "../utils/Console.js";

class GameController {
  async play() {
    const { carNames, tryCount } = await this.#getValidatedInputs();
    const cars = carNames.map((carName) => new Car(carName));
    this.#playRace(cars, tryCount);
  }

  #playRace(cars, tryCount) {
    Output.printRaceStart();
    for (let cnt = 1; cnt <= tryCount; cnt++) {
      this.#playRound(cars);
      Console.printLineBreak();
    }
    Output.printWinners(getWinners(cars));
  }

  #playRound(cars) {
    cars.forEach((car) => {
      car.move(getRandomNumber(0, 9));
      Output.printRace(car.name, car.count);
    });
  }

  async #getValidatedInputs() {
    const carNames = await getValidInput(Input.carNames, validateCarNames);
    const tryCount = await getValidInput(Input.tryCount, validateTryCount);

    return { carNames, tryCount };
  }
}

export default GameController;
