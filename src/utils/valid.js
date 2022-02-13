import { NAME_MAX_LENGTH, NAME_MIN_LENGTH, MIN_COUNT } from './constants.js';

export function isValidNameLength(names) {
  return names.every(name => name.length <= NAME_MAX_LENGTH && name.length >= NAME_MIN_LENGTH);
}

export function isDuplicatedName(names) {
  return new Set([...names]).size === names.length;
}

export function isValidCount(count) {
  return +count >= MIN_COUNT;
}
