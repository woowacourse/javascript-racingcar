const ERROR_MESSAGE = Object.freeze({
  NOT_UNIQUE: () => '[ERROR] 중복된 이름은 입력할 수 없습니다.',
  WRONG_ERROR_CODE: () => '[ERROR] 잘못된 에러코드 입니다.',
  WRONG_FORMAT: () => '[ERROR] 잘못된 입력 형식 입니다.',
  INVALID_STRING_SIZE: ({ min, max }) =>
    `[ERROR] ${min}이상 ${max}이하의 문자열만 입력해 주세요.`,
});

module.exports = ERROR_MESSAGE;
