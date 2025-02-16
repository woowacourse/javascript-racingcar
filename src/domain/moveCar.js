const moveCar = (car, randomNumber) => {
  if (randomNumber >= 4) {
    return { ...car, count: car.count + 1 };
  }
  return car;
};

export default moveCar;
