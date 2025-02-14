import { randomNumberGenerator } from "./utils/math.js";
import { RANDOM_NUMBER_RULE } from "./constants/rule/randomNumber.js";
import { ADVANCE_RULE } from "./constants/rule/advance.js";

const moveRacingCars = (carNames, advanceRacingCar) => {
  carNames.forEach((carName) => {
    const randomNumber = randomNumberGenerator(
      RANDOM_NUMBER_RULE.MIN_NUMBER,
      RANDOM_NUMBER_RULE.MAX_NUMBER
    );

    if (randomNumber >= ADVANCE_RULE.CONDITION) {
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
