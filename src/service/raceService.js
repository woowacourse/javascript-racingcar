import Car from "../model/Car.js";
import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";
import { parsingService } from "./parsingService.js";
import randomNumberGenerator from "../model/RandomNumberGenerator.js";

export async function raceInit() {
  const cars = [];

  const carNames = await parsingService.parseInput(
    InputView.getCarName,
    parsingService.parseNames
  );
  const round = await parsingService.parseInput(
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
    return randomNumber >= 4;
  },
  startRace(cars, round) {
    for (let i = 0; i < round; i++) {
      this.moveCar(cars);
      OutputView.printMessage("\n");
    }
  },
  moveCar(cars) {
    for (const car of cars) {
      const randomNumber = randomNumberGenerator(10);
      if (this.isMovable(randomNumber)) {
        car.goForward();
      }
      OutputView.printMessage(car.toString());
    }
  },
};
