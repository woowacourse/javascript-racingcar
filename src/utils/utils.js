const MAX_RANDOM_NUMBER = 10;

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * MAX_RANDOM_NUMBER);
};
