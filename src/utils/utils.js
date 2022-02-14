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

export function makeRandomNumber() {
  return Math.floor(Math.random() * (RANDOM_NUM_MAX + 1));
}

export function isNumberOverStandard(number) {
  return number < GO_FORWARD_CONDITION;
}
