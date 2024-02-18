import OPT from './options.js';

export const NAME = {
  carName: '자동차 이름',
  tryCount: '시도 횟수'
};

export const MESSAGE = {
  middleResultTitle: '\n실행 결과',
  middleResult: (name, location) => `${name} : ${OPT.OUTPUT.locationIndicator.repeat(location)}`,
  finalResult: (names) => `최종 우승자: ${names.join(OPT.OUTPUT.finalResultDelimiter)}`
};

export const PROMPT = {
  inputCarName: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  inputTryCount: '\n시도할 횟수는 몇 회인가요?\n'
};

export const ERROR = {
  prefix: '[ERROR]',
  isNotInteger: (name) => `${name}(은)는 정수 값이어야 합니다.`,
  isNotPositive: (name) => `${name}(은)는 양수 값이어야 합니다.`,
  isNotInRange: (name, min, max) => `${name}(은)는 [${min} ~ ${max}] 이내의 값이어야 합니다.`,
  isNotUnique: (name) => `${name}(은)는 중복된 값이 없어야 합니다.`
};
