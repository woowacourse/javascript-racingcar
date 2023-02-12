const REGEX = {
  CAR_NAME: /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}$/,
  TRY_CNT: /^[1-9][0-9]*$/,
};

const ERROR_MESSAGE = {
  INVALID_NAME: "5자 이하 영어,한글,숫자의 조합을 입력하세요",
  DUPLICATE_NAME: "중복된 이름의 자동차가 있습니다",
  INVALID_NUMBER: "1이상의 양의 정수를 입력하세요",
};

const Validator = {
  validateName: (names) => {
    const isCarNameError = names.every((name) => REGEX.CAR_NAME.test(name));
    if (!isCarNameError) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
    if (names.length !== [...new Set(names)].length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
  },

  validateTryCnt: (inputValue) => {
    if (!REGEX.TRY_CNT.test(inputValue)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  },
};

module.exports = { Validator };
