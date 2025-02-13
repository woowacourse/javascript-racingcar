import { formatRacingResult } from "./utils/format.js";

export const racingCarController = (carNames) => {
  const carsInfo = carNames.reduce((acc, carName) => {
    acc[carName] = 0;
    return acc;
  }, {});

  const advanceRacingCar = (carName) => {
    carsInfo[carName] += 1;
  };

  const getRacingCarResult = () => {
    return Object.entries(carsInfo).reduce((acc, [carName, distance]) => {
      acc += formatRacingResult(carName, distance);
      return acc;
    }, "");
  };

  const getWinners = () => {
    const maxDistance = Math.max(...Object.values(carsInfo));

    return Object.keys(carsInfo).filter(
      (carName) => carsInfo[carName] === maxDistance
    );
  };

  return { advanceRacingCar, getRacingCarResult, getWinners };
};
