const Validator = {
  validateName: (names) => {
    const regex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}$/;
    names.forEach((name) => {
      if (!regex.test(name)) {
        throw new Error('5자 이하 영어,한글,숫자의 조합을 입력하세요');
      }
    });
    if (names.length !== [...new Set(names)].length) {
      throw new Error('중복된 이름의 자동차가 있습니다');
    }
  },

  validateTryCnt: (inputValue) => {
    const regex = /^[1-9][0-9]*$/;
    if (!regex.test(inputValue)) {
      throw new Error('1이상의 양의 정수를 입력하세요');
    }
  },
};

module.exports = { Validator };
