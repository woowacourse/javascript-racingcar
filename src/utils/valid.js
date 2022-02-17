import { NAME_MAX_LENGTH, NAME_MIN_LENGTH, MIN_TRY_COUNT, MAX_TRY_COUNT } from './constants.js';

export const isValidNameLength = names => {
  return names.every(name => name.length <= NAME_MAX_LENGTH && name.length >= NAME_MIN_LENGTH);
};

export const isDuplicatedName = names => {
  return new Set([...names]).size === names.length;
};

export const isValidCount = count => {
  return +count >= MIN_TRY_COUNT && +count <= MAX_TRY_COUNT;
};
