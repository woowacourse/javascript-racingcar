const MESSAGE = {
  GET_CAR_NAME:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  GET_TRY_COUNT: '시도할 회수는 몇회인가요?',
};

const ERROR = {
  CAR_NAME_LENGTH: '자동차 이름은 1글자 이상 5글자 이하입니다.',
  CAR_NAME_DUPLICATED: '자동차 이름은 중복되지 않아야 합니다.',
  NOT_A_RACE: '2대 이상의 자동차 이름을 입력해주세요.',
  TRYCOUNT_NOT_A_NUMBER: '시도 횟수는 숫자를 입력해주세요.',
  TRYCOUNT_UNDER_ONE: '시도 횟수는 1회 이상이어야 합니다.',
};

const NAME_MIN_LENGTH = 0;
const NAME_MAX_LENGTH = 5;
const MIN_PARTICIPATE = 2;
const MIN_TRYCOUNT = 1;

const MOVE_FORWARD = '-';

module.exports = {
  MESSAGE,
  ERROR,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  MIN_PARTICIPATE,
  MIN_TRYCOUNT,
  MOVE_FORWARD,
};
