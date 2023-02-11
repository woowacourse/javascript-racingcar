const CONSOLE_ERROR_MESSAGE = {
  numberOfArguments: '[ERROR] 인자는 두개만 가능합니다.',
  isNotString: '[ERROR] 출력메세지는 문자열이어야만 합니다.',
  typeOfCallback: '[ERROR] 콜백 타입은 함수 타입이어야만 합니다.',
  callbackArguments: '[ERROR] 콜백인자는 하나어야만 합니다.',
};

const RACE_ERROR_MESSAGE = {
  numberOfNames: '[ERROR] 중복되지 않는 자동차 이름을 두개 이상으로 입력해주세요.',
  lengthOfName: '[ERROR] 자동차의 이름은 5글자 이하로 입력해주세요.',
  invalidInput: '[ERROR] 자동차의 이름을 다시 입력해주세요.',
  rangeOfTryCount: '[ERROR] 1이상의 숫자를 입력해주세요.',
};

module.exports = { CONSOLE_ERROR_MESSAGE, RACE_ERROR_MESSAGE };
