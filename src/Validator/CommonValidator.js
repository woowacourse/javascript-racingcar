import AppError from "../utils/Error";

const CommonValidator = (() => {
  const checkEmpty = (input) => {
    if (input === "") {
      throw new AppError("아무것도 입력하지 않았으므로 다시 입력해주세요.");
    }
  };

  const checkExistSpace = (input) => {
    if (input.includes(" ")) {
      throw new AppError("입력한 값에 공백이 존재합니다.");
    }
  };

  return {
    check: (input) => {
      checkEmpty(input);
      checkExistSpace(input);
    },
  };
})();

export default CommonValidator;
