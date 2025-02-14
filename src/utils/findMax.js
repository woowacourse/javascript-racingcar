export const getMaxPosition = (cars) => {
  return Math.max(...cars.map((car) => car.position));
};
