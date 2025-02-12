const MAX_NAME_LENGTH = 5;

const validationInputLength = (input) => {
  if (input.length > MAX_NAME_LENGTH) {
    throw new Error("자동차 이름은 5자 이하입니다.");
  }
};

const validationCarNameForm = (input) => {
  const commaCount = input.split("").filter((value) => value === ",").length;
  const carCount = input.split(",").length;
  if (input.trim() === "" || commaCount - 1 !== carCount) {
    throw new Error("자동차 이름이 올바르지 않습니다.");
  }
};
