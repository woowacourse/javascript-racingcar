import { MIN_TRY_COUNT, MAX_TRY_COUNT, MAX_NAME_LENGTH, MIN_NAME_LENGTH } from './constants.js';

export const isValidNameLength = names => {
  return names.every(name => name.length <= MAX_NAME_LENGTH && name.length >= MIN_NAME_LENGTH);
};

export const isDuplicatedName = names => {
  return new Set([...names]).size === names.length;
};

export const isValidCount = count => {
  return +count >= MIN_TRY_COUNT && +count <= MAX_TRY_COUNT;
};
