import { formatRacingResult } from "./utils/format.js";

export const racingCarController = (carNames) => {
  const carsInfo = carNames.reduce((acc, carName) => {
    acc[carName] = { distance: 0 };
    return acc;
  }, {});

  const advanceRacingCar = (carName) => {
    carsInfo[carName].distance += 1;
  };

  const getRacingCarResult = () => {
    return Object.entries(carsInfo).reduce((acc, [carName, carData]) => {
      acc += formatRacingResult(carName, carData.distance);
      return acc;
    }, "");
  };

  const getWinners = () => {
    const maxDistance = Math.max(
      ...Object.values(carsInfo).map((car) => car.distance)
    );
    return Object.keys(carsInfo).filter(
      (carName) => carsInfo[carName].distance === maxDistance
    );
  };

  return { advanceRacingCar, getRacingCarResult, getWinners, carsInfo };
};
