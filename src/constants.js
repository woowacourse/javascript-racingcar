const FORMATTING_TYPE = {
  MOVING_LOG: 'movingLog',
  WINNERS: 'winner',
  ERROR: 'error',
};

const MESSAGE = {
  ASK_CAR_NAME:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ASK_TRY_COUNT: '\n시도할 회수는 몇회인가요?\n',
  RESULT: '\n실행 결과',
};

const REGEX = {
  CAR_NAME: /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}$/,
  TRY_CNT: /^[1-9][0-9]*$/,
};

const ERROR_MESSAGE = {
  INVALID_NAME: '5자 이하 영어,한글,숫자의 조합을 입력하세요',
  DUPLICATE_NAME: '중복된 이름의 자동차가 있습니다',
  INVALID_NUMBER: '1이상의 양의 정수를 입력하세요',
};

const FORMAT = {
  ERROR: 'ERROR: ',
  POSITION: '-',
  WINNERS: '가 최종 우승했습니다.',
};

const GAME_VALUE = {
  MAX_RANGE: 9,
  MOVING_BOUNDARY_VALUE: 4,
};

module.exports = {
  FORMATTING_TYPE,
  MESSAGE,
  FORMAT,
  GAME_VALUE,
  REGEX,
  ERROR_MESSAGE,
};
