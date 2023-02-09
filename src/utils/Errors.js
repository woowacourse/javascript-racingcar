const ERROR_CODE = Object.freeze({
  NOT_NUMBER: 'NOT_NUMBER',
  NOT_ALPHA: 'NOT_ALPHA',
  NOT_STRING: 'NOT_STRING',
  NOT_UNIQUE: 'NOT_UNIQUE',
  INVALID_STRING_SIZE: 'INVALID_STRING_SIZE',
  WRONG_ERROR_CODE: 'WRONG_ERROR_CODE',
  WRONG_FORMAT: 'WRONG_FORMAT',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: () => '[ERROR] 숫자만 입력해 주세요.',
  NOT_ALPHA: () => '[ERROR] 알파벳만 입력해 주세요.',
  NOT_STRING: () => '[ERROR] 문자열만 입력해 주세요.',
  NOT_UNIQUE: () => '[ERROR] 중복된 이름은 입력할 수 없습니다.',
  WRONG_ERROR_CODE: () => '[ERROR] 잘못된 에러코드 입니다.',
  WRONG_FORMAT: () => '[ERROR] 잘못된 입력 형식 입니다.',
  INVALID_STRING_SIZE: ({ min, max }) =>
    `[ERROR] ${min}이상 ${max}이하의 문자열만 입력해 주세요.`,
});

const createParams = ({ code, payload = null }, value) => {
  if (!ERROR_MESSAGE[code]) {
    return [
      ERROR_MESSAGE[ERROR_CODE.WRONG_ERROR_CODE](),
      { cause: { code: ERROR_CODE.WRONG_ERROR_CODE, value: code } },
    ];
  }

  return [ERROR_MESSAGE[code](payload), { cause: { code, value } }];
};

class CustomError extends Error {
  constructor(about, value = null) {
    super(...createParams(about, value));
  }
}

module.exports = { CustomError, ERROR_CODE };
