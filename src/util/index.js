export const convertToNumber = (value) => parseInt(value, 10);

export const isNotNaturalNumber = (number) => {
  return number < 1 || Math.floor(number) !== number;
};

export const generateRandomNumber = () => Math.floor(Math.random() * 10);

export const waitGame = (miliSecond) => new Promise((resolve) => setTimeout(resolve, miliSecond));
