import { resetCarNamesInput, resetTryNumInput } from "./display-utils.js";

export const isCarNameEmpty = (carNames) => {
  if (carNames.includes("")) {
    alert("올바른 자동차 이름을 입력하세요.");
    resetCarNamesInput();

    return true;
  }
};

export const isCarNameLengthValid = (carNames) => {
  const invalidCarNames = carNames.filter((carName) => carName.length > 5);
  if (invalidCarNames.length !== 0) {
    alert("올바른 자동차 이름을 입력하세요.");
    resetCarNamesInput();

    return true;
  }
};

export const isTryNumInvalid = (tryNum) => {
  if (Number(tryNum) <= 0) {
    alert("올바른 시도 횟수를 입력하세요.");
    resetTryNumInput();

    return true;
  }
};

export const isTryNumNotNumber = (tryNum) => {
  if (isNaN(tryNum)) {
    alert("올바른 시도 횟수를 입력하세요.");
    resetTryNumInput();

    return true;
  }
};
