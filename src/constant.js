const CAR_NAME_MAX_LENGTH = 5;

const SCREEN_CMD = {
    SHOW_TRT: 'try',
    SHOW_RESULT: 'result',
};

const ERROR_MESSAGE = {
    EMPTY_CAR_NAME: '자동차 이름을 입력해주세요.',
    BLANK_CAR_NAME: '자동차 이름에 공백이 들어갈 수 없습니다.',
    EXCEED_CAR_NAME: '자동차 이름은 5자 이하입니다.',
    NO_NUMBER_TRY_COUNT: '숫자를 입력해주세요.',
    NEGATIVE_TRY_COUNT: '양수를 입력해주세요.',
    FIRST_ENROLL_CAR: '자동차를 먼저 등록해주세요.',
};

const SUCCESS_MESSAGE = '축하드립니다. 자동차 경주가 무사히 끝났습니다!';

const CAR_GO_FORWARD_RULE = {
    MIN: 0,
    MAX: 9,
    ENOUGH: 4,
};

export { CAR_NAME_MAX_LENGTH, SCREEN_CMD, ERROR_MESSAGE, SUCCESS_MESSAGE, CAR_GO_FORWARD_RULE };
