import { RULE } from "./constants/index.js";

export const initRacingCar = (carNames) => {
  return carNames.reduce((acc, carName) => {
    acc[carName] = 0;
    return acc;
  }, {});
};

export const getRacingCarResult = (racingCar) => {
  return Object.entries(racingCar).reduce((acc, [carName, distance]) => {
    const advanceExpression = RULE.ADVANCE_EXPRESSION.repeat(distance);
    acc += `${carName}: ${advanceExpression}\n`;
    return acc;
  }, "");
};

export const getWinners = (racingCar) => {
  const maxDistance = Math.max(...Object.values(racingCar));

  return Object.keys(racingCar).filter(
    (carName) => racingCar[carName] === maxDistance
  );
};
