import { NAME_LENGTH, RACING_COUNT } from '../constants.js';

const isValidCarNameLength = names =>
  names.every(
    name => name.length >= NAME_LENGTH.MIN && name.length <= NAME_LENGTH.MAX,
  );

const isDifferentCarNames = names => new Set(names).size === names.length;

const isValidRacingCount = count =>
  count >= RACING_COUNT.MIN && count <= RACING_COUNT.MAX;

const isInteger = number => Number.isInteger(number);

export {
  isValidCarNameLength,
  isDifferentCarNames,
  isValidRacingCount,
  isInteger,
};
