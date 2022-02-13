export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const maxNumber = (cars) => {
  return cars.reduce((acc, { distance }) => {
    return acc > distance ? acc : distance;
  }, 0);
};
