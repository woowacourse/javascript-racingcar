const CONSOLE_ERROR_MESSAGE = {
  NUMBER_OF_ARGUMENTS: 'arguments must be 2.',
  IS_NOT_STRING: 'query must be string',
  TYPE_OF_CALLBACK: 'callback must be function',
  CALLBACK_ARGUMENTS: 'callback must have 1 argument',
};

const RACE_ERROR_MESSAGE = {
  NUMBER_OF_NAMES:
    '[ERROR] 중복되지 않는 자동차 이름을 두개 이상으로 입력해주세요.',
  LENGTH_OF_NAME: '[ERROR] 자동차의 이름은 5글자 이하로 입력해주세요.',
  INVALID_INPUT: '[ERROR] 자동차의 이름을 다시 입력해주세요.',
  RANGE_OF_TRY_COUNT: '[ERROR] 1이상의 숫자를 입력해주세요.',
};

module.exports = {
  CONSOLE_ERROR_MESSAGE,
  RACE_ERROR_MESSAGE,
};
