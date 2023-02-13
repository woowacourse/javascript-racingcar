export const MESSAGE = {
  error: {
    blank: '[ERROR] 자동차 이름에 공백이 포함되어서는 안됩니다.',
    nameLength: '[ERROR] 자동차 이름은 5자 이하이어야 합니다.',
    lowerCase: '[ERROR] 자동차 이름은 영소문자로 이루어져야 합니다.',
    duplicatedName: '[ERROR] 자동차 이름이 중복되었습니다.',
    numeric: '[ERROR] 시도 횟수는 양의 정수이어야 합니다.',
    exist: '[ERROR] 자동차 이름이 존재해야 합니다.',
  },

  input: {
    carName:
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
    tryCount: '시도할 회수는 몇회인가요?\n',
  },

  output: {
    processResultHeader: '\n실행 결과',
  },
};

export const POSITION_UNIT = '-';

export const WINNER_DIVIDER = ', ';

export const CAR_NAME_DIVIDER = ',';

export const MOVE_SETTING = {
  advance: 1,
  stop: 0,
  advanceBoundary: 4,
};

export const MAX_NUMBER = 9;
export const MIN_NUMBER = 0;
