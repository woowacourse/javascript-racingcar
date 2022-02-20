import {
  ERR_HAS_DUPLICATE_NAME,
  ERR_HAS_EMPTY_NAME,
  ERR_HAS_LONG_NAME,
  ERR_NUMBER_NOT_INTEGER,
  ERR_NUMBER_UNDER_ZERO,
  NAME_LENGTH_MAX,
} from '../constants/consts.js';

import { state } from '../models/state.js';
import { clearInput, findAlertInputId } from './utils.js';

export function isNameValid(names) {
  try {
    if (hasDuplicatedName(names)) {
      alert(ERR_HAS_DUPLICATE_NAME);
      throw 'name error';
    }
    if (hasEmptyName(names)) {
      alert(ERR_HAS_EMPTY_NAME);
      throw 'name error';
    }
    if (hasLongName(names)) {
      alert(ERR_HAS_LONG_NAME);
      throw 'name error';
    }
    return true;
  } catch (errorMessage) {
    clearInput(findAlertInputId(errorMessage));
  }
}

function hasDuplicatedName(names) {
  const tempNames = new Set(names);
  if (tempNames.size !== names.length) {
    return true;
  }
  return false;
}

function hasEmptyName(names) {
  return names.includes('');
}

function isNameTooLong(name) {
  if (name.length > NAME_LENGTH_MAX) {
    return true;
  }
  return false;
}

function hasLongName(names) {
  for (let i = 0; i < names.length; i++) {
    if (isNameTooLong(names[i])) {
      return true;
    }
  }
  return false;
}

export function isRacingNumberValid(racingNumber) {
  try {
    if (!isNumberInteger(racingNumber)) {
      alert(ERR_NUMBER_NOT_INTEGER);
      throw 'number error';
    }
    if (isNumberUnderZero(racingNumber)) {
      alert(ERR_NUMBER_UNDER_ZERO);
      throw 'number error';
    }
    return true;
  } catch (errorMessage) {
    clearInput(findAlertInputId(errorMessage));
  }
}

function isNumberInteger(number) {
  if (Number.isInteger(Number(number))) {
    return true;
  }
  return false;
}

function isNumberUnderZero(number) {
  if (number <= 0) {
    return true;
  }
  return false;
}

export function isUserInputExist() {
  if (!isCarNameExist()) {
    return false;
  }
  if (!isRacingNumberExist()) {
    return false;
  }
  return true;
}

export function isCarNameExist() {
  if (state.cars.length === 0) {
    return false;
  }
  return true;
}

export function isRacingNumberExist() {
  if (state.racingNumber !== 0) {
    return true;
  }
  return false;
}
