export const createCars = (carNames) => {
  return carNames.map((carName) => ({ name: carName, position: 0 }));
};
