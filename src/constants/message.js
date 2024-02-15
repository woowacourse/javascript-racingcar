const MESSAGE = {
  CAR_NAME_LIST_INPUT: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  TURN_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
  RACE_RESULT: '\n실행 결과',
};

const ERROR_MESSAGE = {
  CAR_NAME_LIST_LENGTH: '[ERROR] 자동차 목록은 2대 이상 입력해주세요.',
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.',
  TURN_COUNT_IS_FLOAT_NUMBER: '[ERROR] 시도할 횟수는 실수로 입력할 수 없습니다. 다시 입력해주세요.',
  TURN_COUNT_IS_NOT_NUMBER: '[ERROR] 시도할 횟수는 숫자로만 입력해주세요.',
  TURN_COUNT_IS_NOT_NATURAL_NUMBER: '[ERROR] 시도할 횟수는 1 이상의 자연수로만 입력해주세요.',
};

export { MESSAGE, ERROR_MESSAGE };
