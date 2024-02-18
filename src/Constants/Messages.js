import { CAR_CONSTANTS, SYMBOL } from './Constants';

const { NAME_LENGTH_RANGE } = CAR_CONSTANTS;
const { MOVE_SYMBOL } = SYMBOL;

export const ERROR_MESSAGES = Object.freeze({
  // car 관련 에러 메세지
  INVALID_NAME_LENGTH: `자동차 이름 길이는 ${NAME_LENGTH_RANGE.min}자 이상 ${NAME_LENGTH_RANGE.max}자 이하여야합니다.`,
  DUPLICATED_NAME: '중복된 이름이 있습니다.',
  INCLUDES_SPACE_NAME: '이름에 공백이 들어 갈 수 없습니다.',

  // try 관련 에러 메시지
  INVALID_TYPE: '숫자 값만 입력해주세요.',
  INVALID_RANGE: '1 이상 200미만의 숫자만 입력해주세요.',
});

export const VIEW_MESSAGES = Object.freeze({
  // input 관련 메시지
  PROMPT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분). ',
  PROMPT_TRY: '시도할 횟수는 몇 회인가요?',

  // output 관련 메시지
  RESULT_MESSAGE: '실행 결과',
  WINNER_PREFIX: '최종 우승자 : ',
  NO_WINNER: '최종 우승자는 없습니다.',
  DISPLAY_CURRENT_DISTANCE: (name, distance) => `${name} : ${MOVE_SYMBOL.repeat(distance)}`,
});
