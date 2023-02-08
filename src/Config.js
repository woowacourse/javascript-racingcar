const Messages = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ERROR_CAR_NAME:
    '[ERROR] 자동차 이름 길이 오류',
};

const Settings = {
  SEPARATOR: ',',
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
};

module.exports = { Messages, Settings };
