const ERROR_CODE = Object.freeze({
  NOT_NUMBER: 'NOT_NUMBER',
  NOT_ALPHA: 'NOT_ALPHA',
  NOT_STRING: 'NOT_STRING',
  INVALID_STRING_SIZE: 'INVALID_STRING_SIZE',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: () => '[ERROR] 숫자만 입력해 주세요.',
  NOT_ALPHA: () => '[ERROR] 알파벳만 입력해 주세요.',
  NOT_STRING: () => '[ERROR] 문자열만 입력해 주세요.',
  INVALID_STRING_SIZE: ({ min, max }) =>
    `[ERROR] ${min}이상 ${max}이하의 문자열만 입력해 주세요.`,
});

const createParams = ({ code, payload = null }, value) =>
  // eslint-disable
  [ERROR_MESSAGE[code](payload), { cause: { code, value } }];

class CustomError extends Error {
  constructor(about, value = null) {
    super(...createParams(about, value));
  }
}

module.exports = { CustomError, ERROR_CODE };
