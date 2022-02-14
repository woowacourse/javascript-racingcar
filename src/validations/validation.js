import {
  ERR_HAS_DUPLICATE_NAME,
  ERR_HAS_EMPTY_NAME,
  ERR_HAS_LONG_NAME,
  ERR_NUMBER_NOT_INTEGER,
  ERR_NUMBER_UNDER_ZERO,
} from "../constants/errors.js";
import { NAME_LENGTH_MAX } from "../constants/conditions.js";
import { state } from "../models/Race.js";

export function checkNameValid(names) {
  if (hasDuplicatedName(names)) {
    throw ERR_HAS_DUPLICATE_NAME;
  }
  if (hasEmptyName(names)) {
    throw ERR_HAS_EMPTY_NAME;
  }
  if (hasLongName(names)) {
    throw ERR_HAS_LONG_NAME;
  }
}

export function checkRacingNumberValid(racingNumber) {
  if (!isNumberInteger(racingNumber)) {
    throw ERR_NUMBER_NOT_INTEGER;
  }
  if (isNumberUnderZero(racingNumber)) {
    throw ERR_NUMBER_UNDER_ZERO;
  }
}

function hasDuplicatedName(names) {
  const tempNamesSet = new Set(names);
  return tempNamesSet.size !== names.length;
}

function hasEmptyName(names) {
  return names.includes("");
}

function isNameTooLong(name) {
  return name.length > NAME_LENGTH_MAX;
}

function isNumberInteger(number) {
  return Number.isInteger(Number(number));
}

function isNumberUnderZero(number) {
  return number <= 0;
}

function hasLongName(names) {
  for (let i = 0; i < names.length; i++) {
    if (isNameTooLong(names[i])) {
      return true;
    }
  }
  return false;
}
