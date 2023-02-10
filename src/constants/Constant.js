const INPUT_CONDITION = {
  minimumCarQuantity: 2,
  minimumCarNameLength: 1,
  maximumCarNameLength: 5,
  minimumRaceRound: 1,
};

const RESULT_MESSAGE = {
  opening: '\n실행 결과',
  ending: '(이)가 최종 우승했습니다.',
};

const REQUEST_MESSAGE = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  raceRound: '시도할 회수는 몇회인가요?\n',
};

const ERROR_MESSAGE = {
  invalidCarQuantity: `[ERROR] 2개 이상의 차이름을 입력하세요.`,
  invalidCarNameLength: `[ERROR] 1자 이상, 5자 이하의 이름을 입력하세요.`,
  duplicateCarName: `[ERROR] 중복되는 차 이름이 존재합니다.`,
  invalidGameRound: `[ERROR] 1 이상의 숫자를 입력하세요.`,
};

module.exports = { INPUT_CONDITION, RESULT_MESSAGE, REQUEST_MESSAGE, ERROR_MESSAGE };
