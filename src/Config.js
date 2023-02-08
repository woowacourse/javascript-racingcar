const Messages = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  INPUT_ATTEMPTS: '시도할 회수는 몇회인가요?\n',
  ERROR_CAR_NAME: '[ERROR] 자동차 이름 길이 오류',
  ERROR_ATTRMPTS: '[ERROR] 시도할 횟수 입력 오류',
};

const Settings = {
  SEPARATOR: ',',
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
  MIN_ATTEMPTS: 1,
  MAX_ATTEMPTS: 1000,
  MIN_RANDOM_VALUE: 0,
  MAX_RANDOM_VALUE: 10,
  MOVING_NUMBER: 4,
};

module.exports = { Messages, Settings };
