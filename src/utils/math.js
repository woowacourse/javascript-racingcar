export const randomNumberGenerator = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
