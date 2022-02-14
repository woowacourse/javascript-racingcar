import { NAME_LENGTH, RACING_COUNT } from '../constants.js';

const isAvailableCarNameLength = names =>
  names.every(
    name => name.length >= NAME_LENGTH.MIN && name.length <= NAME_LENGTH.MAX,
  );

const isNotDuplicatedCarNames = names => new Set(names).size === names.length;

const isAvailableRacingCount = count =>
  count >= RACING_COUNT.MIN && count <= RACING_COUNT.MAX;

const isInteger = number => Number.isInteger(number);

export {
  isAvailableCarNameLength,
  isNotDuplicatedCarNames,
  isAvailableRacingCount,
  isInteger,
};
