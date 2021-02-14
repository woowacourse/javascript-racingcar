export const isCarNameEmpty = (carNames) => {
  if (carNames.includes("")) {
    return true;
  }
  return false;
};

export const isInvalidCarNameLength = (carNames) => {
  const invalidCarNames = carNames.filter((carName) => carName.length > 5);
  if (invalidCarNames.length !== 0) {
    return true;
  }
  return false;
};

export const isTryNumInvalid = (tryNum) => {
  if (Number(tryNum) <= 0) {
    return true;
  }
  return false;
};

export const isTryNumNotNumber = (tryNum) => {
  if (isNaN(tryNum)) {
    return true;
  }
  return false;
};
