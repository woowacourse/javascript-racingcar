const MAX_NAME_LENGTH = 5;

const validationInputLength = (input) => {
  if (input.length > MAX_NAME_LENGTH) {
    throw new Error("자동차 이름은 5자 이하입니다.");
  }
};
