export const resetCars = (cars) => {
  cars = [];
};

export const resetForwardCount = (cars) => {
  cars.forEach((car) => (car.forwardCount = 0));
};
