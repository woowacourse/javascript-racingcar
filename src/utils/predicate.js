export const isInRange = (min, max, value) => {
  return value >= min && value <= max;
};

export const isDuplicate = (array) => {
  return new Set(array).size !== array.length;
};
