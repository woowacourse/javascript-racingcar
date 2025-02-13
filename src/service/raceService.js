import randomNumberGenerator from "../model/RandomNumberGenerator.js";

export const raceService = {
  isMovable(randomNumber) {
    return randomNumber >= 4;
  },
  moveCar(cars, round) {
    for (let i = 0; i < round; i++) {
      for (const car of cars) {
        const randomNumber = randomNumberGenerator(10);
        if (raceService.isMovable(randomNumber)) {
          car.goForward();
        }
      }
    }
  },
};
