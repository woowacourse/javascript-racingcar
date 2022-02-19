import {
  ERROR_HAS_DUPLICATE_NAME,
  ERROR_HAS_EMPTY_NAME,
  ERROR_HAS_LONG_NAME,
  ERROR_NUMBER_NOT_INTEGER,
  ERROR_NUMBER_UNDER_ZERO,
} from "../constants/errors.js";
import { NAME_LENGTH_MAX } from "../constants/conditions.js";

export function checkNameValid(names) {
  if (hasDuplicatedName(names)) {
    throw ERROR_HAS_DUPLICATE_NAME;
  }
  if (hasEmptyName(names)) {
    throw ERROR_HAS_EMPTY_NAME;
  }
  if (hasLongName(names)) {
    throw ERROR_HAS_LONG_NAME;
  }
}

export function checkRoundCountValid(roundCount) {
  if (!isNumberInteger(roundCount)) {
    throw ERROR_NUMBER_NOT_INTEGER;
  }
  if (isNumberUnderZero(roundCount)) {
    throw ERROR_NUMBER_UNDER_ZERO;
  }
}

function hasDuplicatedName(names) {
  const tempNamesSet = new Set(names);
  return tempNamesSet.size !== names.length;
}

function hasEmptyName(names) {
  return names.includes("");
}

function isNumberInteger(number) {
  return Number.isInteger(Number(number));
}

function isNumberUnderZero(number) {
  return number <= 0;
}

function hasLongName(names) {
  return names.some(isNameTooLong);
}

function isNameTooLong(name) {
  return name.length > NAME_LENGTH_MAX;
}
