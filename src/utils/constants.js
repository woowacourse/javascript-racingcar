const CAR = Object.freeze({
  MOVE_CONDITION: 4,
  NAME_LOWER_INCLUSIVE: 1,
  NAME_UPPER_INCLUSIVE: 5,
});

const INPUT_MESSAGE = Object.freeze({
  ENTER_CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ENTER_TRY_COUNT: '시도할 횟수는 몇회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  EXECUTE_RESULT: '실행 결과',
  MOVE_RESULT: (name, distance) => `${name} : ${distance}`,
  WINNERS: (winners) => `${winners}(이)가 최종 우승했습니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: `[ERROR] 자동차 이름은 ${CAR.NAME_LOWER_INCLUSIVE}~${CAR.NAME_UPPER_INCLUSIVE}글자여야 합니다.`,
  NAME_OVERLAP: '[ERROR] 중복된 자동차 이름이 있습니다.',
  NAME_ONLY_KOR_ENG_NUM: '[ERROR] 자동차 이름은 한글(음절단위), 영어, 숫자만 사용 가능합니다.',
  INVALID_TRY_COUNT: '[ERROR] 입력값은 1이상인 자연수여야 합니다.',
});

module.exports = {
  CAR,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
};
