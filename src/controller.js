export const racingCarController = (carNames) => {
  const carsInfo = carNames.reduce((acc, carName) => {
    acc[carName] = 0;
    return acc;
  }, {});

  const advanceRacingCar = (carName) => {
    carsInfo[carName] += 1;
  };

  const getRacingCarResultEntries = () => {
    return Object.entries(carsInfo);
  };

  const getWinners = () => {
    const maxDistance = Math.max(...Object.values(carsInfo));

    return Object.keys(carsInfo).filter(
      (carName) => carsInfo[carName] === maxDistance
    );
  };

  return {
    advanceRacingCar,
    getRacingCarResultEntries,
    getWinners,
  };
};
