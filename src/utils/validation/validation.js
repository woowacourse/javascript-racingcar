const validation = {
  isInteger: (value) => Number.isInteger(value),
  isUnique: (array) => new Set(array).size === array.length,
  isPositive: (value) => value > 0,
  isInRange: (value, min, max) => value >= min && value <= max
};

export default validation;
