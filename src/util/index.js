export const convertToNumber = (value) => parseInt(value, 10);

export const isNotNaturalNumber = (number) => {
  return number < 1 || Math.floor(number) !== number;
};
