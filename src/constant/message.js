import CONFIG from './config';

const LINE_BREAK = '\n';
const ERROR_MESSAGE_PREFIX = '[ERROR]';

const MESSAGE = {
  CAR_NAME_LIST_INPUT: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  TURN_COUNT_INPUT: '시도할 횟수는 몇 회인가요?',
  RACE_HEADER: '실행 결과',
  WINNER: '최종 우승자:',
  POSITION_SYMBOL: '-',
};

const ERROR_MESSAGE = {
  CAR_NAME_INPUT_FORMAT: `${ERROR_MESSAGE_PREFIX} 자동차 이름 입력값은 문자열 형태로 입력해주셔야 합니다.`,
  CAR_NAME_LIST_LENGTH: `${ERROR_MESSAGE_PREFIX} 자동차 목록은 ${CONFIG.MIN_CAR_NAME_LIST_LENGTH}대 이상 입력해주세요.`,
  CAR_NAME_LENGTH: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CONFIG.MIN_CAR_NAME_LENGTH}자 이상 ${CONFIG.MAX_CAR_NAME_LENGTH}자 이하여야 합니다.`,
  TURN_COUNT_IS_NOT_INTEGER: `${ERROR_MESSAGE_PREFIX} 시도할 횟수는 실수로 입력할 수 없습니다. 다시 입력해주세요.`,
  TURN_COUNT_IS_NOT_NUMBER: `${ERROR_MESSAGE_PREFIX} 시도할 횟수는 숫자로만 입력해주세요.`,
  TURN_COUNT_IS_NOT_NATURAL_NUMBER: `${ERROR_MESSAGE_PREFIX} 시도할 횟수는 ${CONFIG.MIN_TURN_COUNT} 이상의 자연수로만 입력해주세요.`,
};

export { LINE_BREAK, MESSAGE, ERROR_MESSAGE };
