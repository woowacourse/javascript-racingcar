import { CONFIG } from './config.js';

const INPUT = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',

});

const OUTPUT = Object.freeze({
  RESULT_GREETING: `${CONFIG.LINE_BREAK}실행 결과`,
  WINNERS: '최종 우승자',
});

const ERROR = Object.freeze({
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 1자 이상 5자 이하입니다.',
  BLANK: '[ERROR] 자동차 이름에 공백이 포함되어 있습니다.',
  DUPLICATED_CAR_NAME: '[ERROR] 자동차 이름이 중복되었습니다.',
  NOT_POSITIVE_NUMBER: '[ERROR] 시도할 횟수는 양의 정수여야 합니다.',
});

export { INPUT, OUTPUT, ERROR };
