import { generateRandomNumber } from "./utils/math.js";
import { GAME_RULES } from "./constants/rules/game.js";
import { RANDOM_RULES } from "./constants/rules/randomNumber.js";

const moveRacingCars = (carNames, advanceRacingCar) => {
  carNames.forEach((carName) => {
    const randomNumber = generateRandomNumber(
      RANDOM_RULES.MIN_NUMBER,
      RANDOM_RULES.MAX_NUMBER
    );

    if (randomNumber >= GAME_RULES.ADVANCE_CONDITION) {
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
