const Validator = {
  checkName(input) {
    if (input.includes(' ')) {
      throw new Error('입력값에 공백이 포함되어 있습니다.');
    }
    if (input[input.length - 1] === ',') {
      throw new Error('입력값 마지막에 쉼표가 포함되어 있습니다.');
    }
  },
  checkDuplicate(input) {
    const names = input.split(',');
    if (new Set(names).size !== names.length) {
      throw new Error('입력값에 중복되는 이름이 존재합니다.');
    }
  },
  checkIntegerNumber(input) {
    input.split('').forEach((char) => {
      if (!'0123456789'.includes(char)) {
        throw new Error('입력값이 정수가 아닙니다.');
      }
    });
  },
};

export default Validator;
