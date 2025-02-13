import { ERROR } from "../constants/messages.js";

export default function validateCarNames(names) {
  const namesArr = names.split(",").map((name) => name.trim());

  validateLeastCars(namesArr);
  validateEmptyString(namesArr);
  validateCarNameLength(namesArr);
  validateDuplicate(namesArr);

  return namesArr;
}

export function validateLeastCars(names) {
  if (names.length <= 1) {
    throw new Error(ERROR.INVALID_CARS_LENGTH);
  }
}

export function validateEmptyString(names) {
  names.forEach((name) => {
    if (name.length === 0) {
      throw new Error(ERROR.EMPTY_STRING);
    }
  });
}

export function validateCarNameLength(names) {
  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERROR.INVALID_CARNAME_LENGTH);
    }
  });
}

export function validateDuplicate(names) {
  let uniqueCars = []; // 중복 없는 자동차들

  for (let name of names) {
    if (uniqueCars.includes(name)) {
      // 중복일 때
      throw new Error(ERROR.DUPLICATE_NAME);
    }
    uniqueCars.push(name);
  }
}
