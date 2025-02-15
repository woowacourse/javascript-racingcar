const MESSAGE = {
  INPUT: {
    NAME: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n`,
    TRY_NUMBER: `시도할 횟수는 몇 회인가요?\n`,
  },
  ERROR: {
    IS_STRING_LENGTH_OVER: '[ERROR] 5글자 이하의 이름을 사용해 주세요.',
    IS_ARRAY_LENGTH_OVER: '[ERROR] 40명 이하의 인원을 입력해주세요.',
    IS_RANGE_OVER: (min, max) => `[ERROR] ${min}보다 크고 ${max}보다 작은 값을 입력해주세요.`,
    IS_DECIMAL: `[ERROR] 정수를 입력해주세요.`,
    IS_DUPLICATE: `[ERROR] 중복된 입력값이 있습니다.`,
    IS_NUMBER: `[ERROR] 숫자를 입력해주세요.`,
    IS_EMPTY: `[ERROR] 입력값이 비어있습니다.`,
  },
};

export default MESSAGE;
