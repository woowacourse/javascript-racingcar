import { GAME_RULE } from './rule.js';

export const ERROR_MESSAGE = {
  carNameInputEmpty: '[ERROR] 자동차 이름을 입력해주세요.',
  tryCountNotNumber: '[ERROR] 시도 횟수는 숫자여야 합니다.',
  tryCountNotInteger: '[ERROR] 시도 횟수는 정수여야 합니다.',
  carCount: `[ERROR] 자동차는 ${GAME_RULE.carCount.min}대 이상이여야 합니다.`,
  carNameLength: `[ERROR] 자동차 이름은 ${GAME_RULE.carNameLength.min}자 이상 ${GAME_RULE.carNameLength.max}자 이하여야 합니다.`,
  carNameDuplicate: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  tryCount: `[ERROR] 시도 횟수는 ${GAME_RULE.tryCount.min}회 이상 ${GAME_RULE.tryCount.max}회 이하여야 합니다.`,
  tryCountType: '[ERROR] 시도 횟수는 숫자여야 합니다.',
};

export const CONSOLE_MESSAGE = {
  carNamesInput: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  tryCountInput: '시도할 횟수는 몇 회인가요?\n',
  resultStartMessage: '\n실행 결과',
  winnerStartMessage: '최종 우승자 : ',
};
