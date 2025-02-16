import { ERROR } from "../constants/messages.js";
import pipe from "../utils/pipe.js";

export default function validateCarNames(names) {
  const namesArr = names.split(",").map((name) => name.trim());

  return pipe(
    validateLeastCars,
    validateEmptyString,
    validateCarNameLength,
    validateDuplicate
  )(namesArr);
}

/**
 * 최소 두 대의 자동차가 입력되었는지 검증
 */
export function validateLeastCars(names) {
  if (names.length <= 1) {
    throw new Error(ERROR.INVALID_CARS_LENGTH);
  }
  return names;
}

/**
 * 빈 문자열(공백 포함) 검증
 */
export function validateEmptyString(names) {
  if (names.some((name) => name.length === 0)) {
    throw new Error(ERROR.EMPTY_STRING);
  }
  return names;
}

/**
 * 자동차 이름이 5자 이하인지 검증
 */
export function validateCarNameLength(names) {
  if (names.some((name) => name.length > 5)) {
    throw new Error(ERROR.INVALID_CARNAME_LENGTH);
  }
  return names;
}

/**
 * 중복된 자동차 이름 검증
 */
export function validateDuplicate(names) {
  const uniqueNames = new Set(names);
  if (uniqueNames.size !== names.length) {
    throw new Error(ERROR.DUPLICATE_NAME);
  }
  return names;
}
