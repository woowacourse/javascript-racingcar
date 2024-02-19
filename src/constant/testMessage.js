import CONFIG from './config';

const CAR_TEST_MESSAGE = {
  TITLE: 'Car 클래스 테스트',
  MOVE_FORWARD: '자동차는 move 메서드 실행 시 전진할 수 있어야 한다.',
};

const RACE_TEST_MESSAGE = {
  TITLE: 'Race 클래스 테스트',
  MOVE_CAR_WHEN_MET_CONDITION: `무작위 값이 ${CONFIG.CAR_MOVING_CONDITION} 이상이라면 자동차를 1만큼 전진시켜야 한다.`,
  NOT_MOVE_CAR_WHEN_MISS_CONDITION: `무작위 값이 ${CONFIG.CAR_MOVING_CONDITION} 미만이라면 자동차를 전진시키지 않아야 한다.`,
  RETURN_CAR_POSITIONS: 'getTurnResult 메서드는 호출 시점의 각 자동차의 이름과 위치값을 반환해야 한다.',
  RETURN_WINNERS: 'getWinner 메서드는 호출 시점의 최종 우승자를 배열 형태로 반환해야 한다.',
};

const VALIDATOR_TEST_MESSAGE = {
  TITLE: '입력값 검증 테스트',
  CAR_NAME_INPUT_FORMAT: '자동차 목록 입력값에 배열, 숫자 또는 객체 포맷은 허용하지 않는다.',
  MAX_CAR_NAME_LENGTH: `각 자동차의 이름은 ${CONFIG.MAX_CAR_NAME_LENGTH}글자 이하여야 한다.`,
  MIN_CAR_NAME_LENGTH: `각 자동차의 이름은 ${CONFIG.MIN_CAR_NAME_LENGTH}글자 이상이어야 한다.`,
  MIN_CAR_NAME_LIST_LENGTH: `자동차 입력은 최소 ${CONFIG.MIN_CAR_NAME_LIST_LENGTH}대 이상 이루어져야 한다.`,
  MIN_TURN_COUNT: `입력된 이동 횟수는 최소 ${CONFIG.MIN_TURN_COUNT} 이상이어야 한다.`,
  TURN_COUNT_SHOULD_BE_NUMBER: '입력된 이동 횟수에 숫자가 아닌 다른 형식의 입력값은 허용하지 않는다.',
  TURN_COUNT_SHOULD_BE_INTEGER: '입력된 이동 횟수에 소수점이 포함된 실수 입력값은 허용하지 않는다.',
};

export { CAR_TEST_MESSAGE, RACE_TEST_MESSAGE, VALIDATOR_TEST_MESSAGE };
