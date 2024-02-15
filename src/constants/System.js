export const OPTION = {
  INPUT_SPLITER: ',',
  OUPUT_SPLITER: ', ',
  LOCATATION_INDICATOR: '-',
  CAR_NAME_MAX_LENGTH: 5,
};

export const MESSAGE = {
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?',
  WINNER: '최종 우승자: ',
  RESULT: '\n실행 결과',
  CURRENT_LOCATION: (name, location) =>
    `${name} : ${OPTION.LOCATATION_INDICATOR.repeat(location)}`,
};

export const ERROR_MESSAGE = {
  PREFIX: '[ERROR]',
  CAR_NAME_LENGTH: `${this.PREFIX} 자동차 이름은 5글자 이하만 가능합니다.`,
  CAR_NAME_DUPLICATE: `${this.PREFIX} 자동차 이름은 중복될 수 없습니다.`,
  TRY_COUNT_NUMBER: `${this.PREFIX} 시도 횟수는 숫자여야 합니다.`,
  TRY_COUNT_MIN: `${this.PREFIX} 1회 이상 시도해야합니다.`,
};
