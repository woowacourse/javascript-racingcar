const CONDITIONS = require('./Conditions.js');

const INPUT_MESSSAGES = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n',
  moveCount: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  result: '\n실행 결과',
  winners: '최종 우승자: ',
});

const ERROR_MESSAGES = Object.freeze({
  invalidCarCountRange: `자동차 갯수는 ${CONDITIONS.minCarCount}개 이상 ${CONDITIONS.maxCarCount}개 이하여야 합니다.`,
  carNameEmpty: '자동차 이름은 빈 문자열일 수 없습니다.',
  carNameDuplicate: '자동차 이름은 중복될 수 없습니다.',
  carNameInSpace: '자동차 이름에 공백이 들어갈 수 없습니다.',
  carNameInDelimiter: '자동차 이름에 구분자가 들어갈 수 없습니다.',
  invalidCarNameLength: `자동차 이름은 ${CONDITIONS.maxCarNameLength}자 이하여야 합니다.`,
  NaN: `입력값은 숫자여야 합니다.`,
  invalidTryCountRange: `시도할 횟수는 ${CONDITIONS.minTryCount}회 이상 ${CONDITIONS.maxTryCount}회 이하여야 합니다.`,
  argumentsNotOne: '인자값은 1개여야 합니다',
  typeIsNotString: '입력 타입은 string 이어야 합니다.',
});

module.exports = {
  INPUT_MESSSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
};
