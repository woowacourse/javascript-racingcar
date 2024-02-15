export const INPUT_QUERY = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  tryCount: '시도할 횟수는 몇 회인가요?',
};

export const MESSAGES = {
  result: '실행 결과',
  winner: '최종 우승자 : ',
  positionMark: '-',
};

export const ERROR_MESSAGES = {
  prefix: '[ERROR]',
  carNameLength: '경주할 자동차 이름은 1자 이상 5자 이하만 가능합니다.',
  carNameUniqueness: '자동차 이름은 중복될 수 없습니다.',
  tryCount: '시도할 횟수는 1이상의 숫자만 가능합니다.',
  invalidNumberRange: '최솟값은 최대값보다 작거나 같아야 합니다.',
  invalidNumberType: '숫자만 입력 가능합니다.',
};

export const RULES = {
  minRandomNumber: 1,
  maxRandomNumber: 9,
  moveStandard: 4,
  initialPosition: 0,
  movingUnit: 1,
};
