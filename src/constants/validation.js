const VALID_CHARACTER_REGEX = /^[a-z|A-Z|가-힣|,]+$/g;
const VALID_INTEGER_REGEX = /^[1-9]\d*$/;

const ERROR_MESSAGE = {
  INVALID_CHARACTER: '[ERROR] 올바르지 않은 문자가 입력되었습니다. 다시 입력해 주세요.',
  INVALID_NAME_LENGTH:
    '[ERROR] 자동차 이름은 1자 이상, 5자 이하여야 합니다. 다시 입력해 주세요.',
  INVALID_TRY_COUNT: '[ERROR] 양의 정수가 아닌 값이 입력되었습니다. 다시 입력해 주세요.',
};

module.exports = {
  VALID_CHARACTER_REGEX,
  VALID_INTEGER_REGEX,
  ERROR_MESSAGE,
};
