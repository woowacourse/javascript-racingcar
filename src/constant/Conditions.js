const SYMBOL = Object.freeze({
  delimiter: ',',
  distance: '-',
  space: ' ',
});

const RULES = Object.freeze({
  minMoveCondition: 4,
  minRandomNumberRange: 0,
  maxRandomNumberRange: 9,
  moveDistance: 1,
  minCarCount: 2,
  maxCarCount: 10,
  maxCarNameLength: 5,
  minTryCount: 1,
  maxTryCount: 1000,
});

const REGEXP = Object.freeze({
  numericPattern: /^\d+$/,
});

const CONDITIONS = Object.freeze({
  ...SYMBOL,
  ...RULES,
  ...REGEXP,
});

module.exports = CONDITIONS;
