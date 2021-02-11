export const isInputEmpty = (carNames) => {
  if (carNames.includes("")) {
    return true;
  }
  return false;
};

export const isCarNameLengthValid = (carNames) => {
  const invalidCarNames = carNames.filter((carName) => carName.length > 5);
  if (invalidCarNames.length !== 0) {
    return true;
  }
  return false;
};

export const isInputNegative = (tryNum) => {
  if (Number(tryNum) <= 0) {
    return true;
  }
  return false;
};

export const isInputString = (tryNum) => {
  if (isNaN(tryNum)) {
    return true;
  }
  return false;
};
