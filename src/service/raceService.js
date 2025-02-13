import randomNumberGenerator from "../model/RandomNumberGenerator.js";
import { OutputView } from "../view/OutputView.js";

export const raceService = {
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
      if (raceService.isMovable(randomNumber)) {
        car.goForward();
      }
      OutputView.printMessage(car.toString());
    }
  },
};
