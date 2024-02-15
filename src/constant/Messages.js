import CONDITIONS from './Conditions.js';

export const INPUT_MESSSAGES = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)',
  moveCount: '시도할 횟수는 몇 회인가요?',
});

export const OUTPUT_MESSAGES = Object.freeze({
  result: '실행 결과',
  winners: '최종 우승자: ',
});

export const ERROR_MESSAGES = Object.freeze({
  invalidCarCountRange: `자동차 갯수는 ${CONDITIONS.minCarCount}개 이상 ${CONDITIONS.maxCarCount}개 이하여야 합니다.`,
  carNameEmpty: '자동차 이름은 빈 문자열일 수 없습니다.',
  carNameDuplicate: '자동차 이름은 중복될 수 없습니다.',
  invalidCarNameLength: `자동차 이름은 ${CONDITIONS.maxCarNameLength}자 이하여야 합니다.`,
  NaN: `입력값은 숫자여야 합니다.`,
  invalidTryCountRange: `시도할 횟수는 ${CONDITIONS.minTryCount}회 이상 ${CONDITIONS.maxTryCount}회 이하여야 합니다.`,
});
