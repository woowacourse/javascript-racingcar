import { showAlertMsg } from './utils.js';

export function isNameValid(names) {
  if (hasDuplicatedName(names)) {
    showAlertMsg('이름입력 에러 : 중복된 이름 있음');
    return false;
  }
  if (hasEmptyName(names)) {
    showAlertMsg('이름입력 에러 : 공백 이름 있음');
    return false;
  }
  if (hasLongName(names)) {
    showAlertMsg('이름입력 에러 : 6글자 이상의 이름 있음');
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

export function isRacingNumberValid(racingNumber) {
  if (!isNumberInteger(racingNumber)) {
    showAlertMsg('숫자입력 에러 :정수가 아닌 횟수');
    return false;
  }
  if (isNumberUnderZero(racingNumber)) {
    showAlertMsg('숫자입력 에러 : 0이하의 횟수');
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

export function isCarNameExist(state) {
  if (state.cars.length === 0) {
    showAlertMsg('이름입력 에러 : 자동차 이름을 먼저 입력해주세요.');
    return false;
  }
  return true;
}
