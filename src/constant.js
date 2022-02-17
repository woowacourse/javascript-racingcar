const CAR_NAME_MAX_LENGTH = 5;

const SCREEN_CMD = {
    SHOW_TRT: 'try',
    SHOW_RESULT: 'result',
};

const ERROR_MESSAGE = {
    EMPTY_CAR_NAME: '자동차 이름을 입력해주세요.',
    BLANK_CAR_NAME: '자동차 이름에 공백이 들어갈 수 없습니다.',
    EXCEED_CAR_NAME: '자동차 이름은 5자 이하입니다.',
    NATURAL_CAR_NAME: '자연수를 입력해주세요.',
    POSITIVE_CAR_NAME: '양수를 입력해주세요.',
};

const SELECTOR = {
    car_name_submit_button: '#car-name-submit-button',
    try_count_submit_button: '#try-count-submit-button',
    restart_button: '#restart-button',
    car_name_input: '#car-name-input',
    try_count_input: '#try-count-input',
    app: '#app',
    track_area: '#track-area',
    winners: '#winners',
};

export { CAR_NAME_MAX_LENGTH, SCREEN_CMD, ERROR_MESSAGE, SELECTOR };
