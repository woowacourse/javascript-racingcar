import { ERR_KEY_NAME, ERR_KEY_NUMBER } from "../constants/errors.js";
import {
  GO_FORWARD_CONDITION,
  RANDOM_NUM_MAX,
} from "../constants/conditions.js";

export function doTrim(names) {
  const newNames = names.map((item) => {
    return item.trim();
  });
  return newNames;
}

export function clearInput(inputId) {
  const inputLocation = document.getElementById(inputId);
  inputLocation.value = "";
  inputLocation.focus();
}

export function showAlertMsg(message) {
  alert(message);
  clearInput(findAlertInputId(message));
}

function findAlertInputId(message) {
  const errKey = message[0];
  if (errKey === ERR_KEY_NAME) {
    return "car-name-input";
  }
  if (errKey === ERR_KEY_NUMBER) {
    return "racing-number-input";
  }
}

export function makeRandomNumber() {
  return Math.floor(Math.random() * (RANDOM_NUM_MAX + 1));
}

export function isNumberOverStandard(number) {
  return number < GO_FORWARD_CONDITION;
}
