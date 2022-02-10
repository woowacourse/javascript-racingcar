import { showAlertMsg } from './utils.js';

export function isNameValid(names) {
  if (hasDuplicatedName(names)) {
    showAlertMsg('중복된 이름 있음');
    return false;
  }
  if (hasEmptyName(names)) {
    showAlertMsg('공백 이름 있음');
    return false;
  }
  if (hasLongName(names)) {
    showAlertMsg('6글자 이상의 이름 있음');
    return false;
  }
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
  if (name.length > 5) {
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
