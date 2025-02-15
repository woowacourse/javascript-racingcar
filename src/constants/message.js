import { MAX_CAR_NAME, MAX_TRY_COUNT, MIN_CAR_NAME, MIN_TRY_COUNT } from './common.js';

export const PRINT_MESSAGE = {
  RUN_RESULT: '\n실행 결과',
};
export const INPUT_MESSAGE = {
  CAR_NAME: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  TRY_COUNT: '\n시도할 횟수는 몇 회인가요?\n',
};

export const ERROR_MESSAGE = {
  CAR_NAME_EMPTY: '[ERROR] 자동차 이름을 입력해주세요.',
  CAR_NAME_LENGTH: `[ERROR] 자동차 이름은 ${MIN_CAR_NAME}에서 ${MAX_CAR_NAME}자 사이여야 합니다.`,
  CAR_NAME_DUPLICATED: '[ERROR] 자동차 이름은 중복되면 안됩니다.',
  CAR_NAME_MIN: '[ERROR] 자동차는 두 대 이상이여야 합니다.',

  TRY_COUNT_RANGE: `[ERROR] 시도 횟수는 ${MIN_TRY_COUNT} ~ ${MAX_TRY_COUNT} 사이여야 합니다.`,
  TRY_COUNT_INTEGER: '[ERROR] 시도 횟수는 자연수로 입력되어야 합니다.',
};
