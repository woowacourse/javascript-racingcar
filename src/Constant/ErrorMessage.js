const CONSOLE_ERROR_MESSAGE = {
  numberOfArguments: 'arguments must be 2.',
  isNotString: 'query must be string',
  typeOfCallback: 'callback must be function',
  callbackArguments: 'callback must have 1 argument',
};

const RACE_ERROR_MESSAGE = {
  numberOfNames: '[ERROR] 중복되지 않는 자동차 이름을 두개 이상으로 입력해주세요.',
  lengthOfName: '[ERROR] 자동차의 이름은 5글자 이하로 입력해주세요.',
  invalidInput: '[ERROR] 자동차의 이름을 다시 입력해주세요.',
  rangeOfTryCount: '[ERROR] 1이상의 숫자를 입력해주세요.',
};

module.exports = { CONSOLE_ERROR_MESSAGE, RACE_ERROR_MESSAGE };
