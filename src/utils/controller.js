import { RULE } from "../constants/index.js";
import { randomNumberGenerator } from "./math.js";

export const racingCarController = (carNames) => {
  const racingCar = carNames.reduce((acc, carName) => {
    acc[carName] = 0;
    return acc;
  }, {});

  const advanceRacingCar = (carName) => {
    const shouldAdvance =
      randomNumberGenerator(RULE.MIN_RANDOM_NUMBER, RULE.MAX_RANDOM_NUMBER) >=
      RULE.ADVANCE_CONDITION;

    if (shouldAdvance) {
      racingCar[carName] += 1;
    }
  };

  const getRacingCarTextFormat = () => {
    return Object.entries(racingCar).reduce((acc, [carName, distance]) => {
      acc += `${carName}: ${RULE.ADVANCE_EXPRESSION.repeat(distance)}\n`;
      return acc;
    }, "");
  };

  const startRace = (attemptCount) => {
    const result = [];

    const carNames = Object.keys(racingCar);
    for (let i = 0; i < attemptCount; i++) {
      carNames.forEach((carName) => advanceRacingCar(carName));
      result.push(getRacingCarTextFormat());
    }

    return result;
  };

  const getWinner = () => {
    const maxDistance = Math.max(...Object.values(racingCar));

    return Object.keys(racingCar).filter(
      (carName) => racingCar[carName] === maxDistance
    );
  };

  return { startRace, getWinner };
};
