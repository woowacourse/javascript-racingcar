export const generateRandomNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
