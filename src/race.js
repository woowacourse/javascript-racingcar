import { randomNumberGenerator } from "./utils/math.js";
import { RULE } from "./constants/index.js";

const moveRacingCars = (carNames, advanceRacingCar) => {
  carNames.forEach((carName) => {
    const randomNumber = randomNumberGenerator(
      RULE.MIN_RANDOM_NUMBER,
      RULE.MAX_RANDOM_NUMBER
    );

    if (randomNumber >= RULE.ADVANCE_CONDITION) {
      advanceRacingCar(carName);
    }
  });
};

export const startRace = (
  attemptCount,
  carNames,
  advanceRacingCar,
  getRacingCarResult
) => {
  const snapShots = [];

  for (let i = 0; i < attemptCount; i++) {
    moveRacingCars(carNames, advanceRacingCar);
    snapShots.push(getRacingCarResult());
  }

  return snapShots;
};
