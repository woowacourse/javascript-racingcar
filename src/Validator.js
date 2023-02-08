const Validator = {
  validateName: (inputValue) => {
    const regex =
      /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}(, *[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5})*$/;
    if (!regex.test(inputValue)) {
      throw new Error("5자 이하 영어,한글,숫자의 조합을 입력하세요");
    }
  },
  validateTryCnt: (inputValue) => {
    const regex = /^[1-9][0-9]*$/;
    if (!regex.test(inputValue)) {
      throw new Error("1이상의 양의 정수를 입력하세요");
    }
  },
};

module.exports = { Validator };
