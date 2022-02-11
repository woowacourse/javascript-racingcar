import { showAlertMsg } from './utils.js';
import {
  ERR_HAS_DUPLICATE_NAME,
  ERR_HAS_EMPTY_NAME,
  ERR_HAS_LONG_NAME,
  ERR_NUMBER_NOT_INTEGER,
  ERR_NUMBER_UNDER_ZERO,
  ERR_CAR_NAME_NOT_EXIST,
} from '../constants/errors.js';
import { NAME_LENGTH_MAX } from '../constants/conditions.js';
import { state } from '../models/state.js';

export function isNameValid(names) {
  if (hasDuplicatedName(names)) {
    showAlertMsg(ERR_HAS_DUPLICATE_NAME);
    return false;
  }
  if (hasEmptyName(names)) {
    showAlertMsg(ERR_HAS_EMPTY_NAME);
    return false;
  }
  if (hasLongName(names)) {
    showAlertMsg(ERR_HAS_LONG_NAME);
    return false;
  }
  return true;
}

function hasDuplicatedName(names) {
  const tempNames = new Set(names);
  if (tempNames.size !== names.length) {
    return true;
  }
  return false;
}

function isEmptyName(name) {
  if (name === '') {
    return true;
  }
  return false;
}

function hasEmptyName(names) {
  for (let i = 0; i < names.length; i++) {
    if (isEmptyName(names[i])) {
      return true;
    }
  }
  return false;
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
  if (!isNumberInteger(racingNumber)) {
    showAlertMsg(ERR_NUMBER_NOT_INTEGER);
    return false;
  }
  if (isNumberUnderZero(racingNumber)) {
    showAlertMsg(ERR_NUMBER_UNDER_ZERO);
    return false;
  }
  return true;
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

export function isCarNameExist() {
  if (state.cars.length === 0) {
    showAlertMsg(ERR_CAR_NAME_NOT_EXIST);
    return false;
  }
  return true;
}
