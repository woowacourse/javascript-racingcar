import Car from "../domain/Car.js";
import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";
import { parsingService } from "./parsingService.js";
import randomNumberGenerator from "../util/RandomNumberGenerator.js";
import { systemSetting } from "../constants/systemSetting.js";
import { SystemMessage } from "../constants/SystemMessage.js";
import { getValidInput } from "../util/GetValidInput.js";

export async function raceInit() {
  const cars = [];

  const carNames = await getValidInput(
    InputView.getCarName,
    parsingService.parseNames
  );
  const round = await getValidInput(
    InputView.getRound,
    parsingService.parseRound
  );

  for (const carName of carNames) {
    cars.push(new Car(carName));
  }
  return { cars, round };
}

export const raceManager = {
  isMovable(randomNumber) {
    return randomNumber >= systemSetting.MOVABLE_NUMBER;
  },
  startRace(cars, round) {
    OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
    for (let i = 0; i < round; i++) {
      this.moveCar(cars);
      OutputView.printMessage("\n");
    }
  },
  moveCar(cars) {
    for (const car of cars) {
      const randomNumber = randomNumberGenerator(
        systemSetting.MINIMUM_RANDOM_NUMBER,
        systemSetting.MAXIMUM_RANDOM_NUMBER
      );
      if (this.isMovable(randomNumber)) {
        car.goForward();
      }
      OutputView.printRound(car.name, car.position);
    }
    OutputView.printMessage("\n");
  },
};
