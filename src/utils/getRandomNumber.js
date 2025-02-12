export const getRandomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);

  return num;
};
