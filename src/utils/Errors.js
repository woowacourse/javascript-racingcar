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
  INVALID_STRING_SIZE: ({ min, max }) => `[ERROR] ${min}이상 ${max}이하의 문자열만 입력해 주세요.`,
});

const isValidErrorCode = (code) => code in ERROR_CODE;

const errorMessageGenerator = (code, payload) =>
  !isValidErrorCode(code) ? ERROR_MESSAGE.WRONG_ERROR_CODE() : ERROR_MESSAGE[code](payload);

const errorOptionsGenerator = (code, value) =>
  !isValidErrorCode(code)
    ? { cause: { code: ERROR_CODE.WRONG_ERROR_CODE, value: code } }
    : { cause: { code, value } };

const createErrorParams = ({ code, payload = null }, value) => {
  const message = errorMessageGenerator(code, payload);
  const options = errorOptionsGenerator(code, value);

  return [message, options];
};

class CustomError extends Error {
  constructor(about, value = null) {
    super(...createErrorParams(about, value));

    this.name = isValidErrorCode(about.code) ? about.code : ERROR_CODE.WRONG_ERROR_CODE;
  }
}

module.exports = { CustomError, ERROR_CODE };
