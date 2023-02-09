export const NAME_DELIMITER = ',';

export const VIEW_MESSAGE = Object.freeze({
  naming: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  tryCount: '시도할 회수는 몇회인가요?',
  resultTitle: '실행 결과',
  carProgress: ({ name, distance }) => `${name} : ${'-'.repeat(distance)}`,
  winner: (winnerList) => `${winnerList.join(', ')}가 최종 우승했습니다.`,
  blank: '',
});

export const ERROR_MESSAGE = Object.freeze({
  blank: '입력값에 공백이 포함되어 있습니다.',
  lastComma: '입력값 마지막에 쉼표가 포함되어 있습니다.',
  duplicate: '입력값에 중복되는 값이 존재합니다.',
  notInteger: '입력값이 정수가 아닙니다.',
});

export const MOVE_NUMBER = Object.freeze({
  randomMin: 0,
  randomMax: 9,
  threshold: 4,
});

export const VALIDATOR = Object.freeze({
  integerString: '0123456789',
});

export const CAR = Object.freeze({
  initialDistance: 1,
  moveUnit: 1,
});
