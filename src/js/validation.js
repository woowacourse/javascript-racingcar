export const isCarNameFilled = input => {
  return input !== '';
};

export const isCarNameUnderFive = nameLength => {
  return nameLength <= 5;
};

export const isTryCountFilled = input => {
  return input !== '';
};

export const isTryCountPos = number => {
  return number > 0;
};

export const isTryCountInt = number => {
  return number === Math.floor(number);
};
