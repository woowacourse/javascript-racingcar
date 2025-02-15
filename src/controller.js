export const racingCarController = (carNames) => {
  const carsInfo = carNames.reduce((acc, carName) => {
    acc[carName] = { distance: 0 };
    return acc;
  }, {});

  const advanceRacingCar = (carName) => {
    carsInfo[carName].distance += 1;
  };

  const getRacingCarResultEntries = () => {
    const carsInfoEntries = Object.entries(carsInfo);
    return carsInfoEntries.map(([carName, info]) => {
      return [carName, { ...info }];
    });
  };

  const getWinners = () => {
    const distanceList = Object.values(carsInfo).map(
      ({ distance }) => distance
    );
    const maxDistance = Math.max(...distanceList);

    return Object.keys(carsInfo).filter(
      (carName) => carsInfo[carName].distance === maxDistance
    );
  };

  return {
    advanceRacingCar,
    getRacingCarResultEntries,
    getWinners,
  };
};
