export const isValidBlankInArray = (names, min) => {
  return names.every((name) => name.length >= min);
};

export const isValidLengthInArray = (names, max) => {
  return names.every((name) => name.length <= max);
};

export const isLessNumber = (number, min) => number < min;
